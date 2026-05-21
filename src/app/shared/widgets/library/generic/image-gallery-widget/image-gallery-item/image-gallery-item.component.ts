import { Component, input, output, computed } from '@angular/core';
import { ImageModel } from '../../../../../image/types/image.model';
import { ImageGallerySkeletonComponent } from '../image-gallery-skeleton/image-gallery-skeleton.component';

@Component({
  selector: 'app-image-gallery-item',
  imports: [ImageGallerySkeletonComponent],
  templateUrl: './image-gallery-item.component.html',
  styleUrl: './image-gallery-item.component.scss',
})
export class ImageGalleryItemComponent {
  image = input.required<ImageModel>();
  isLoading = input.required<boolean>();
  imageLoaded = output<void>();
  imageError = output<Event>();

  protected readonly aspectRatio = computed(() => {
    const dimensions = this.image().dimensions;
    return dimensions ? `${dimensions.width}/${dimensions.height}` : '4/3';
  });
}
