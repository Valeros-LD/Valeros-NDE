import { BaseWidgetOptions } from '../../core/types/node-presentation-config';

export interface ImageGalleryWidgetConfig extends BaseWidgetOptions {
  maxThumbnails?: number;
  enableLightbox?: boolean;
}
