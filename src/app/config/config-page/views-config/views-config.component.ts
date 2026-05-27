import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, computed, inject } from '@angular/core';
import { DraggableListItem } from '../../../ui/draggable-list/draggable-list-item';
import { DraggableList } from '../../../ui/draggable-list/draggable-list.component';
import { getIcon } from '../../icon.registry';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-views-config',
  imports: [DraggableList],
  templateUrl: './views-config.component.html',
})
export class ViewsConfigComponent {
  protected configService = inject(ConfigService);

  protected readonly viewsSettings = this.configService.views;
  protected readonly viewDefinitions = computed(
    () => this.viewsSettings()?.views ?? [],
  );

  protected readonly items = computed<DraggableListItem[]>(() =>
    this.viewDefinitions().map((definition) => ({
      label: definition.label,
      sublabel: definition.type,
      icon: getIcon(definition.icon),
      hidden: definition.options.hidden,
    })),
  );

  protected readonly trackByViewType = () => (item: DraggableListItem) =>
    this.viewDefinitions().find((v) => v.label === item.label)?.type ?? '';

  protected onReorder(event: {
    previousIndex: number;
    currentIndex: number;
  }): void {
    const viewsSettings = this.configService.views();
    if (!viewsSettings) return;

    const views = [...viewsSettings.views];
    moveItemInArray(views, event.previousIndex, event.currentIndex);
    this.configService.updateViews({ ...viewsSettings, views });
  }

  protected onToggle(index: number): void {
    const viewsSettings = this.configService.views();
    if (!viewsSettings) return;

    const views = [...viewsSettings.views];
    const definition = views[index];
    views[index] = {
      ...definition,
      options: {
        ...definition.options,
        hidden: !definition.options.hidden,
      },
    };
    this.configService.updateViews({ ...viewsSettings, views });
  }
}
