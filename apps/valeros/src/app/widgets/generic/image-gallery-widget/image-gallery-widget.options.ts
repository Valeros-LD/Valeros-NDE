import { WidgetOptions } from '@valeros/config-schema';

export interface ImageGalleryWidgetOptions extends WidgetOptions {
  maxThumbnails?: number;
  enableLightbox?: boolean;
}
