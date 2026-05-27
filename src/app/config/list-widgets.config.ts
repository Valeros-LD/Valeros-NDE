import { NodePresentationConfig } from '../widgets/core/types/node-presentation-config';
import {
  COMMON_WIDGETS,
  FALLBACK_WIDGET,
  SHARED_SEARCH_RESULT_WIDGETS,
} from './common-widgets.config';

export const LIST_PRESENTATION_CONFIG: NodePresentationConfig = {
  widgets: [
    ...COMMON_WIDGETS,
    ...SHARED_SEARCH_RESULT_WIDGETS,
    {
      id: 'image-thumb-left',
      properties: ['associatedMedia'],
      componentId: 'image-gallery-widget',
      options: {
        showPropertyLabel: false,
        position: 'left',
        maxThumbnails: 1,
        enableLightbox: false,
        fullWidth: true,
      },
    },
    {
      id: 'dataset-without-label',
      properties: ['isPartOf'],
      componentId: 'dataset-widget',
      options: {
        showPropertyLabel: false,
      },
    },
  ],
  display: [
    {
      widgetIds: ['image-thumb-left', 'name', 'description-without-label'],
    },
  ],
  fallbackWidget: FALLBACK_WIDGET,
  showArrowIndicator: true,
};
