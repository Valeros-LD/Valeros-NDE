import { ViewsSettings } from '../search/views/types/view-config';
import { GRID_VIEW_WIDGETS_SETTINGS } from './grid-widgets.config';
import { LIST_VIEW_WIDGETS_SETTINGS } from './list-widgets.config';
import { MAP_VIEW_WIDGETS_SETTINGS } from './map-widgets.config';

export const SEARCH_VIEWS_CONFIG: ViewsSettings = {
  mappings: [
    {
      type: 'list',
      component: 'list-view',
      config: {
        pageSize: 20,
        showPagination: true,
        showResultsCount: true,
      },
      icon: 'feather-list',
      label: 'Lijst weergave',
      widgetsSettings: LIST_VIEW_WIDGETS_SETTINGS,
    },
    {
      type: 'grid',
      component: 'masonry-view',
      config: {
        pageSize: 20,
        showPagination: true,
        showResultsCount: true,
      },
      icon: 'feather-grid',
      label: 'Grid weergave',
      widgetsSettings: GRID_VIEW_WIDGETS_SETTINGS,
    },
    {
      type: 'map',
      component: 'map-view',
      config: {
        pageSize: 100,
        showPagination: false,
        showResultsCount: true,
        showSort: false,
      },
      icon: 'feather-map',
      label: 'Kaart weergave',
      widgetsSettings: MAP_VIEW_WIDGETS_SETTINGS,
    },
  ],
  defaultView: 'list',
};
