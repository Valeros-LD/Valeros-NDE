import { BaseWidgetOptions } from '../../core/types/node-presentation-config';

export interface TextWidgetConfig extends BaseWidgetOptions {
  asHeader?: boolean;
  largeFont?: boolean;
  maxLength?: number;
  enableHighlights?: boolean;
}
