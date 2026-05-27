import { Type } from '@angular/core';
import { BaseWidget } from '../widgets/infrastructure/base-widget';
import { AddressWidget } from '../widgets/library/domain-specific/address-widget/address-widget.component';
import { DatasetWidget } from '../widgets/library/domain-specific/dataset-widget/dataset-widget.component';
import { MiradorIiifWidget } from '../widgets/library/generic/iiif-widget/mirador-iiif-widget/mirador-iiif-widget.component';
import { TifyIiifWidget } from '../widgets/library/generic/iiif-widget/tify-iiif-widget/tify-iiif-widget.component';
import { UniversalviewerIiifWidget } from '../widgets/library/generic/iiif-widget/universalviewer-iiif-widget/universalviewer-iiif-widget.component';
import { ImageGalleryWidget } from '../widgets/library/generic/image-gallery-widget/image-gallery-widget.component';
import { JsonWidget } from '../widgets/library/generic/json-widget/json-widget.component';
import { LinkWidget } from '../widgets/library/generic/link-widget/link-widget.component';
import { MapWidget } from '../widgets/library/generic/map-widget/map-widget.component';
import { MediaWidget } from '../widgets/library/generic/media-widget/media-widget.component';
import { ReferringNodesWidget } from '../widgets/library/generic/referring-nodes-widget/referring-nodes-widget.component';
import { TextWidget } from '../widgets/library/generic/text-widget/text-widget.component';

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
