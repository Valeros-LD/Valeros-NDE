import { inject } from '@angular/core';
import { BASE_WIDGETS_SETTINGS } from './base-widgets.config';
import { ConfigService } from './config-page/config.service';
import { DETAILS_WIDGETS_SETTINGS } from './details-widgets.config';
import { FACETS_CONFIG } from './facets.config';
import { GRID_VIEW_WIDGETS_SETTINGS } from './grid-widgets.config';
import { IMAGE_PATHS_CONFIG } from './image-paths.config';
import { LIST_VIEW_WIDGETS_SETTINGS } from './list-widgets.config';
import { MAP_VIEW_WIDGETS_SETTINGS } from './map-widgets.config';
import { SEARCH_VIEWS_CONFIG } from './views.config';

export function initializeAppConfig() {
  const configService = inject(ConfigService);

  configService.initialize({
    facets: FACETS_CONFIG,
    // TODO: Refactor/rename this to be more "node presentation" focused, separate widgets from generic node presentation properties (eg showArrowIndicator)
    widgets: {
      default: BASE_WIDGETS_SETTINGS,
      details: DETAILS_WIDGETS_SETTINGS,
      search: {
        list: LIST_VIEW_WIDGETS_SETTINGS,
        grid: GRID_VIEW_WIDGETS_SETTINGS,
        map: MAP_VIEW_WIDGETS_SETTINGS,
      },
    },
    views: SEARCH_VIEWS_CONFIG,
    imagePaths: IMAGE_PATHS_CONFIG,
  });
}
