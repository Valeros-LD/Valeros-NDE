import {
  Widget,
  WidgetPosition,
} from '../../../config/schema/valeros-config.schema';

export interface WidgetWithProperty {
  property: string;
  widget: Widget;
}

export type WidgetsByPosition = Record<WidgetPosition, WidgetWithProperty[]>;
