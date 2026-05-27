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
  protected readonly mappings = computed(
    () => this.viewsSettings()?.mappings ?? [],
  );

  protected readonly items = computed<DraggableListItem[]>(() =>
    this.mappings().map((mapping) => ({
      label: mapping.label,
      sublabel: mapping.type,
      icon: getIcon(mapping.icon),
      hidden: mapping.config.hidden,
    })),
  );

  protected readonly trackByViewType = () => (item: DraggableListItem) =>
    this.mappings().find((m) => m.label === item.label)?.type ?? '';

  protected onReorder(event: {
    previousIndex: number;
    currentIndex: number;
  }): void {
    const viewsSettings = this.configService.views();
    if (!viewsSettings) return;

    const mappings = [...viewsSettings.mappings];
    moveItemInArray(mappings, event.previousIndex, event.currentIndex);
    this.configService.updateViews({ ...viewsSettings, mappings });
  }

  protected onToggle(index: number): void {
    const viewsSettings = this.configService.views();
    if (!viewsSettings) return;

    const mappings = [...viewsSettings.mappings];
    const mapping = mappings[index];
    mappings[index] = {
      ...mapping,
      config: {
        ...mapping.config,
        hidden: !mapping.config.hidden,
      },
    };
    this.configService.updateViews({ ...viewsSettings, mappings });
  }
}
