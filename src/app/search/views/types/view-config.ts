import { IconKey } from '../../../config/icon.registry';
import { ViewComponentKey } from '../../../config/view-component.registry';
import { NodePresentationConfig } from '../../../widgets/core/types/node-presentation-config';
import { ViewType } from './view-type';

export interface BaseViewConfig {
  pageSize?: number;
  showPagination?: boolean;
  showResultsCount?: boolean;
  showSort?: boolean;
  hidden?: boolean;
}

export type ViewConfig = BaseViewConfig & Record<string, unknown>;

export interface ViewMapping {
  type: ViewType;
  component: ViewComponentKey;
  config: ViewConfig;
  icon: IconKey;
  label: string;
  presentationConfig: NodePresentationConfig;
}

export interface ViewsSettings {
  mappings: ViewMapping[];
  defaultView: ViewType;
}
