import { WidgetOptions } from '@valeros/config-schema';

export type IIIFViewerType = 'tify' | 'mirador' | 'universalviewer';

export interface MediaWidgetOptions extends WidgetOptions {
  iiifViewer?: IIIFViewerType;
}
