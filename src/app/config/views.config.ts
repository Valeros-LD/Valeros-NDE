import { ViewsConfig } from '../search/views/types/view-config';
import { GRID_PRESENTATION_CONFIG } from './grid-widgets.config';
import { LIST_PRESENTATION_CONFIG } from './list-widgets.config';
import { MAP_PRESENTATION_CONFIG } from './map-widgets.config';

export const SEARCH_VIEWS_CONFIG: ViewsConfig = {
  views: [
    {
      type: 'list',
      componentId: 'list-view',
      options: {
        pageSize: 20,
        showPagination: true,
        showResultsCount: true,
      },
      icon: 'feather-list',
      label: 'Lijst weergave',
      presentationConfig: LIST_PRESENTATION_CONFIG,
    },
    {
      type: 'grid',
      componentId: 'masonry-view',
      options: {
        pageSize: 20,
        showPagination: true,
        showResultsCount: true,
      },
      icon: 'feather-grid',
      label: 'Grid weergave',
      presentationConfig: GRID_PRESENTATION_CONFIG,
    },
    {
      type: 'map',
      componentId: 'map-view',
      options: {
        pageSize: 100,
        showPagination: false,
        showResultsCount: true,
        showSort: false,
      },
      icon: 'feather-map',
      label: 'Kaart weergave',
      presentationConfig: MAP_PRESENTATION_CONFIG,
    },
  ],
  defaultView: 'list',
};
