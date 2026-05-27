import { NodePresentationConfig } from '../widgets/core/types/node-presentation-config';
import {
  COMMON_WIDGETS,
  FALLBACK_WIDGET,
  SHARED_SEARCH_RESULT_WIDGETS,
} from './common-widgets.config';

export const MAP_PRESENTATION_CONFIG: NodePresentationConfig = {
  widgets: [...COMMON_WIDGETS, ...SHARED_SEARCH_RESULT_WIDGETS],
  display: [
    {
      widgetIds: ['image-thumb', 'name', 'description-without-label'],
    },
  ],
  fallbackWidget: FALLBACK_WIDGET,
  showArrowIndicator: false,
};
