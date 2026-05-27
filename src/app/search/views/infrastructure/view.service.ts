import { Injectable, Type, inject } from '@angular/core';
import { ViewType } from '../types/view-type';
import { ViewMapping, ViewConfig } from '../types/view-config';
import { BaseResultsView } from './base-results-view';
import { ConfigService } from '../../../config/config-page/config.service';
import { WidgetsSettings } from '../../../widgets/types/widget-config';
import { getViewComponent } from '../../../config/view-component.registry';
import { getIcon } from '../../../config/icon.registry';

@Injectable({ providedIn: 'root' })
export class ViewService {
  private configService = inject(ConfigService);

  getViewComponent(viewType: ViewType): Type<BaseResultsView> | null {
    const mapping = this.getViewMapping(viewType);
    return mapping ? getViewComponent(mapping.component) : null;
  }

  getViewConfig(viewType: ViewType): ViewConfig {
    return this.getViewMapping(viewType)?.config || {};
  }

  getViewMapping(viewType: ViewType): ViewMapping | null {
    const views = this.configService.views();
    return views?.mappings.find((m) => m.type === viewType) || null;
  }

  getAllViewMappings(): ViewMapping[] {
    const views = this.configService.views();
    return views?.mappings.filter((m) => !m.config.hidden) || [];
  }

  getDefaultViewType(): ViewType {
    return this.configService.defaultView();
  }

  getViewWidgetsSettings(viewType: ViewType): WidgetsSettings | undefined {
    const widgets = this.configService.widgets();
    const searchWidgets = widgets?.search as Record<string, unknown>;
    return searchWidgets?.[viewType] as WidgetsSettings | undefined;
  }
}
