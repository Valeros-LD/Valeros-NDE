import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image-skeleton',
  templateUrl: './image-skeleton.component.html',
  standalone: true,
})
export class ImageSkeletonComponent {
  aspectRatio = input<string>('4/3');
  minHeightPx = input<number>();
}
