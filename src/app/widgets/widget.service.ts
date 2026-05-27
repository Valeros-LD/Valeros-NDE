import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config-page/config.service';
import {
  NodePresentationConfig,
  PropertyWidget,
  WidgetPosition,
} from './core/types/node-presentation-config';
import {
  WidgetGroup as WidgetGroupByPosition,
  WidgetsByPosition,
} from './core/types/widgets-by-position';

@Injectable({ providedIn: 'root' })
export class WidgetService {
  private router = inject(Router);
  private configService = inject(ConfigService);

  getDefaultSettings(): NodePresentationConfig {
    const url = this.router.url;
    const presentation = this.configService.presentation();
    if (!presentation) {
      throw new Error('Config not initialized');
    }
    return url.startsWith('/details')
      ? presentation.details
      : presentation.default;
  }

  getWidgetsByPosition(
    properties: string[],
    presentationConfig: NodePresentationConfig,
  ): WidgetsByPosition {
    const { display } = presentationConfig;

    const collectWidgetsForProperties = (
      properties: string[],
    ): Array<{ property: string; widget: PropertyWidget }> => {
      const widgets: Array<{ property: string; widget: PropertyWidget }> = [];

      const getWidgetsForProperty = (property: string): PropertyWidget[] => {
        const widgets = presentationConfig.widgets.filter((w) =>
          w.properties.includes(property),
        );
        return widgets.length > 0
          ? widgets
          : [presentationConfig.fallbackWidget];
      };

      properties.forEach((property) => {
        getWidgetsForProperty(property).forEach((widget) => {
          widgets.push({ property, widget });
        });
      });
      return widgets;
    };

    const orderAndGroupWidgets = (
      widgets: Array<{ property: string; widget: PropertyWidget }>,
    ): WidgetGroupByPosition[] => {
      if (!display || display.length === 0) {
        return [
          {
            items: widgets.sort((a, b) => a.property.localeCompare(b.property)),
          },
        ];
      }

      const widgetMap = new Map<
        string,
        Array<{ property: string; widget: PropertyWidget }>
      >();

      // Group widgets by ID
      widgets.forEach((item) => {
        const id = item.widget.id || '';
        if (!widgetMap.has(id)) {
          widgetMap.set(id, []);
        }
        widgetMap.get(id)!.push(item);
      });

      // Collect all widget IDs from all groups for checking
      const allOrderedIds = new Set<string>();
      display.forEach((group) => {
        group.widgetIds.forEach((id) => allOrderedIds.add(id));
      });

      const groupedWidgets: WidgetGroupByPosition[] = [];

      // Process display groups
      display.forEach((group) => {
        const groupItems: Array<{ property: string; widget: PropertyWidget }> =
          [];

        group.widgetIds.forEach((widgetId) => {
          if (widgetId === '*') {
            // Add all remaining widgets not yet added
            widgetMap.forEach((items, id) => {
              if (!allOrderedIds.has(id) || id === '') {
                groupItems.push(...items);
              }
            });
          } else if (widgetMap.has(widgetId)) {
            groupItems.push(...widgetMap.get(widgetId)!);
          }
        });

        if (groupItems.length > 0) {
          groupedWidgets.push({
            label: group.label,
            items: groupItems,
          });
        }
      });

      return groupedWidgets;
    };

    const groupWidgetsByPosition = (
      groups: WidgetGroupByPosition[],
    ): WidgetsByPosition => {
      const byPosition: WidgetsByPosition = {
        top: [],
        left: [],
        main: [],
        right: [],
        bottom: [],
      };

      groups.forEach((group) => {
        const positionGroups: Record<
          WidgetPosition,
          Array<{ property: string; widget: PropertyWidget }>
        > = {
          top: [],
          left: [],
          main: [],
          right: [],
          bottom: [],
        };

        group.items.forEach(({ property, widget }) => {
          const position = widget.options?.position || 'main';
          positionGroups[position].push({ property, widget });
        });

        Object.entries(positionGroups).forEach(([position, items]) => {
          const hasItemsForPosition = items.length > 0;
          if (hasItemsForPosition) {
            byPosition[position as WidgetPosition].push({
              label: group.label,
              items,
            });
          }
        });
      });

      return byPosition;
    };

    const collectedWidgets: Array<{
      property: string;
      widget: PropertyWidget;
    }> = collectWidgetsForProperties(properties);
    const groupedWidgets: WidgetGroupByPosition[] =
      orderAndGroupWidgets(collectedWidgets);
    return groupWidgetsByPosition(groupedWidgets);
  }
}
