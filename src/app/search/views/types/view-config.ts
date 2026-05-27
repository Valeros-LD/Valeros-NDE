import { ViewType } from './view-type';
import { WidgetsSettings } from '../../../widgets/types/widget-config';
import { ViewComponentKey } from '../../../config/view-component.registry';
import { IconKey } from '../../../config/icon.registry';

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
  widgetsSettings: WidgetsSettings;
}

export interface ViewsSettings {
  mappings: ViewMapping[];
  defaultView: ViewType;
}
