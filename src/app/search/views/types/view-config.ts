import { IconKey } from '../../../config/icon.registry';
import { ViewComponentKey } from '../../../config/view-component.registry';
import { NodePresentationConfig } from '../../../widgets/core/types/node-presentation-config';
import { ViewOptions } from './view-options';
import { ViewType } from './view-type';

export interface ViewDefinition {
  type: ViewType;
  componentId: ViewComponentKey;
  options: ViewOptions;
  icon: IconKey;
  label: string;
  presentationConfig: NodePresentationConfig;
}

export interface ViewsConfig {
  views: ViewDefinition[];
  defaultView: ViewType;
}
