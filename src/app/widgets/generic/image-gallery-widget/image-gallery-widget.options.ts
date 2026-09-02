import { WidgetOptions } from '../../../config/schema/valeros-config.schema';

export interface ImageGalleryWidgetOptions extends WidgetOptions {
  maxThumbnails?: number;
  enableLightbox?: boolean;
}
