import { Component, input, output } from '@angular/core';
import { ImageModel } from '../../../../../image/types/image.model';

@Component({
  selector: 'app-image-gallery-item',
  templateUrl: './image-gallery-item.component.html',
})
export class ImageGalleryItemComponent {
  image = input.required<ImageModel>();
  isLoading = input.required<boolean>();
  imageLoaded = output<void>();
  imageError = output<Event>();
}
