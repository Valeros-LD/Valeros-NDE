import { Type } from '@angular/core';
import { BaseWidget } from './infrastructure/base-widget';
import { TextWidget } from './library/generic/text-widget/text-widget.component';
import { LinkWidget } from './library/generic/link-widget/link-widget.component';
import { JsonWidget } from './library/generic/json-widget/json-widget.component';
import { ImageGalleryWidget } from './library/generic/image-gallery-widget/image-gallery-widget.component';
import { MapWidget } from './library/generic/map-widget/map-widget.component';
import { MediaWidget } from './library/generic/media-widget/media-widget.component';
import { MiradorIiifWidget } from './library/generic/iiif-widget/mirador-iiif-widget/mirador-iiif-widget.component';
import { TifyIiifWidget } from './library/generic/iiif-widget/tify-iiif-widget/tify-iiif-widget.component';
import { DatasetWidget } from './library/domain-specific/dataset-widget/dataset-widget.component';
import { AddressWidget } from './library/domain-specific/address-widget/address-widget.component';
import { UniversalviewerIiifWidget } from './library/generic/iiif-widget/universalviewer-iiif-widget/universalviewer-iiif-widget.component';
import { ReferringNodesWidget } from './library/generic/referring-nodes-widget/referring-nodes-widget.component';

export const WIDGET_COMPONENT_REGISTRY = {
  'text-widget': TextWidget,
  'link-widget': LinkWidget,
  'json-widget': JsonWidget,
  'image-gallery-widget': ImageGalleryWidget,
  'map-widget': MapWidget,
  'media-widget': MediaWidget,
  'mirador-iiif-widget': MiradorIiifWidget,
  'tify-iiif-widget': TifyIiifWidget,
  'universalviewer-iiif-widget': UniversalviewerIiifWidget,
  'dataset-widget': DatasetWidget,
  'address-widget': AddressWidget,
  'referring-nodes-widget': ReferringNodesWidget,
} as const;

export type WidgetComponentKey = keyof typeof WIDGET_COMPONENT_REGISTRY;

export function getWidgetComponent(key: WidgetComponentKey): Type<BaseWidget> {
  return WIDGET_COMPONENT_REGISTRY[key];
}
