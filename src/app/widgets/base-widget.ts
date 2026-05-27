import { computed, Directive, input } from '@angular/core';
import { applyPropertyPath } from '../data-utils/property-path.util';
import { normalizeToArray } from '../data-utils/value-normalization.util';
import { NodeModel } from '../node/types/node.model';
import { BaseWidgetOptions } from './core/types/node-presentation-config';

@Directive()
export abstract class BaseWidget {
  node = input.required<NodeModel>();
  property = input.required<string>();
  options = input<BaseWidgetOptions & Record<string, unknown>>({});

  showPropertyLabel = computed(() => {
    return this.options().showPropertyLabel !== false;
  });

  propertyLabel = computed(() => {
    return this.options().propertyLabel;
  });

  values = computed<any[]>(() => {
    const propValue = this.node()[this.property()];
    const propValues = normalizeToArray(propValue);

    const propertyPath = this.options().propertyPath;
    if (propertyPath) {
      return applyPropertyPath(propValues, propertyPath) as any[];
    }

    return propValues;
  });

  shouldHide = computed(() => false);
}
