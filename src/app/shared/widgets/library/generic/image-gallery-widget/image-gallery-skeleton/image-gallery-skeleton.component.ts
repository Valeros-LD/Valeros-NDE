import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image-gallery-skeleton',
  templateUrl: './image-gallery-skeleton.component.html',
})
export class ImageGallerySkeletonComponent {
  aspectRatio = input<string>('4/3');
  minHeight = input<number>(200);
}
