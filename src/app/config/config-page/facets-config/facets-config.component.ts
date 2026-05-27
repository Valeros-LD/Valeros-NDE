import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, inject, computed } from '@angular/core';
import { ConfigService } from '../config.service';
import { DraggableList } from '../../../ui/draggable-list/draggable-list.component';
import { DraggableListItem } from '../../../ui/draggable-list/draggable-list-item';
import { FacetsService } from '../../../search/components/facets/facets.service';

@Component({
  selector: 'app-facets-config',
  imports: [DraggableList],
  templateUrl: './facets-config.component.html',
})
export class FacetsConfig {
  protected configService = inject(ConfigService);
  protected facetsService = inject(FacetsService);

  protected readonly facets = this.configService.facets;

  protected readonly items = computed<DraggableListItem[]>(() =>
    this.facets().map((facet) => ({
      label: facet.label,
      sublabel: facet.name,
      icon: this.facetsService.getFacetIcon(facet.name),
      hidden: facet.hidden,
    })),
  );

  protected readonly trackByName = () => (item: DraggableListItem) =>
    this.facets().find((f) => f.label === item.label)?.name ?? '';

  protected onReorder(event: {
    previousIndex: number;
    currentIndex: number;
  }): void {
    const facets = [...this.configService.facets()];
    moveItemInArray(facets, event.previousIndex, event.currentIndex);
    this.configService.updateFacets(facets);
  }

  protected onToggle(index: number): void {
    const facets = [...this.configService.facets()];
    facets[index] = {
      ...facets[index],
      hidden: !facets[index].hidden,
    };
    this.configService.updateFacets(facets);
  }
}
