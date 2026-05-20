import { ViewType } from './view-type';
import { WidgetsSettings } from '../../../../shared/widgets/types/widget-config';
import { ViewComponentKey } from '../view-component.registry';
import { IconKey } from '../../../../shared/icons/icon.registry';

export interface BaseViewConfig {
  pageSize?: number;
  showPagination?: boolean;
  showResultsCount?: boolean;
  showSort?: boolean;
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
