import { Type } from '@angular/core';
import { BaseResultsView } from './infrastructure/base-results-view';
import { ListViewComponent } from './library/list-view/list-view.component';
import { MasonryViewComponent } from './library/masonry-view/masonry-view.component';
import { MapViewComponent } from './library/map-view/map-view.component';

export const VIEW_COMPONENT_REGISTRY = {
  'list-view': ListViewComponent,
  'masonry-view': MasonryViewComponent,
  'map-view': MapViewComponent,
} as const;

export type ViewComponentKey = keyof typeof VIEW_COMPONENT_REGISTRY;

export function getViewComponent(key: ViewComponentKey): Type<BaseResultsView> {
  return VIEW_COMPONENT_REGISTRY[key];
}
