import { Component, computed, input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { getIconOrUndefined } from '../../../config/icon.registry';
import { WidgetOptions } from '../types/node-presentation-config';

@Component({
  selector: 'app-property-label-wrapper',
  imports: [NgIconComponent],
  templateUrl: './property-label-wrapper.component.html',
})
export class PropertyLabelWrapperComponent {
  property = input.required<string>();
  options = input<WidgetOptions>({});

  showLabel = computed(() => this.options().showPropertyLabel !== false);
  displayLabel = computed(
    () => this.options().propertyLabel || this.property(),
  );
  icon = computed(() => getIconOrUndefined(this.options().icon));
}
