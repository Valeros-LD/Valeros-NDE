import { PropertyWidget, WidgetPosition } from './node-presentation-config';

export interface WidgetGroup {
  label?: string;
  items: Array<{ property: string; widget: PropertyWidget }>;
}

export type WidgetsByPosition = Record<WidgetPosition, WidgetGroup[]>;
