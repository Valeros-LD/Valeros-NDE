import {
  Component,
  OnDestroy,
  signal,
  inject,
  effect,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { forkJoin, from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dimensions } from '../../../../image/types/dimensions';
import { ImageModel } from '../../../../image/types/image.model';
import {
  AssociatedMediaNode,
  toImageModel,
} from '../../../../node/types/associated-media.node';
import { BaseWidget } from '../../../infrastructure/base-widget';
import { IiifImageService } from '../iiif-widget/iiif-image.service';
import { ImageGalleryWidgetConfig } from './image-gallery-widget.config';
import { ImageGalleryItemComponent } from './image-gallery-item/image-gallery-item.component';
import { ImageGallerySkeletonComponent } from './image-gallery-skeleton/image-gallery-skeleton.component';

@Component({
  selector: 'app-image-gallery-widget',
  imports: [
    CommonModule,
    ImageGalleryItemComponent,
    ImageGallerySkeletonComponent,
  ],
  templateUrl: './image-gallery-widget.component.html',
  styleUrl: './image-gallery-widget.component.scss',
})
export class ImageGalleryWidget extends BaseWidget implements OnDestroy {
  private iiifService = inject(IiifImageService);
  private lightbox?: PhotoSwipeLightbox;
  readonly galleryId = `gallery-${crypto.randomUUID()}`;
  readonly imagesWithDimensions = signal<ImageModel[]>([]);
  readonly imageLoadingStates = signal<Map<number, boolean>>(new Map());

  protected readonly Array = Array;

  private get maxThumbnails(): number | undefined {
    const config = this.config() as ImageGalleryWidgetConfig;
    return config.maxThumbnails;
  }

  readonly displayedThumbnails = computed(() => {
    const images = this.imagesWithDimensions();
    const max = this.maxThumbnails;
    return max ? images.slice(0, max) : images;
  });

  readonly expectedThumbnailCount = computed(() => {
    const images = this.getImagesData();
    const max = this.maxThumbnails;
    return max ? Math.min(images.length, max) : images.length;
  });

  get isLightboxEnabled(): boolean {
    const config = this.config() as ImageGalleryWidgetConfig;
    return config.enableLightbox ?? true;
  }

  readonly isLoadingImageDimensions = computed(() => {
    // TODO: Ensure that this returns false when loading finishes, but no images are available
    return this.imagesWithDimensions().length === 0;
  });

  constructor() {
    super();
    effect(() => {
      const images = this.getImagesData();
      if (images.length > 0) {
        this.loadImageDimensions(images);
      }
    });
  }

  private getImagesData(): ImageModel[] {
    return (this.values() as AssociatedMediaNode[])
      .map((media: AssociatedMediaNode) => toImageModel(media))
      .filter((img) => img.src !== '');
  }

  onImageLoaded(index: number): void {
    this.imageLoadingStates.update((states) => {
      const newStates = new Map(states);
      newStates.set(index, false);
      return newStates;
    });
  }

  isImageLoading(index: number): boolean {
    return this.imageLoadingStates().get(index) ?? true;
  }

  private loadImageDimensions(images: ImageModel[]): void {
    const dimensionRequests: Observable<ImageModel>[] = images.map((img) => {
      if (!img.iiifInfoUrl) {
        // TODO: Add alternative way of retrieving image dimensions if IIIF is not available
        console.warn('IIIF info URL not available for image:', img.src);
        return of(img);
      }

      return this.iiifService.getImageDimensions(img.iiifInfoUrl).pipe(
        map((dimensions: Dimensions | null) => ({
          ...img,
          dimensions: dimensions || undefined,
        })),
      );
    });

    forkJoin(dimensionRequests).subscribe(
      (imagesWithDimensions: ImageModel[]) => {
        this.imagesWithDimensions.set(imagesWithDimensions);

        if (this.isLightboxEnabled) {
          setTimeout(() => {
            this.initializeLightbox();
          });
        }
      },
    );
  }

  private initializeLightbox(): void {
    this.lightbox = new PhotoSwipeLightbox({
      gallery: `#${this.galleryId}`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      errorMsg: 'Er ging iets mis bij het laden van de afbeelding',
    });
    // this.lightbox.addFilter(
    //   'contentErrorElement',
    //   (contentErrorElement, content) => {
    //     const el = document.createElement('div');
    //     el.className = 'pswp__error-msg';
    //     el.innerHTML = `<img src="https://placehold.co/600x400.png" alt="Image unavailable" />`;
    //     return el;
    //   },
    // );
    // this.lightbox.addFilter('placeholderSrc', (placeholderSrc, content) => {
    //   return 'https://placehold.co/600x400.png';
    // });

    this.lightbox.init();
  }

  onThumbnailError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'https://placehold.co/600x400?text=X';
  }

  ngOnDestroy(): void {
    if (this.lightbox) {
      this.lightbox.destroy();
    }
  }
}
