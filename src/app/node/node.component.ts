import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addUriPrefix } from '../routing/details-page-uri-prefix';
import { DynamicWidgetComponent } from '../widgets/core/dynamic-widget/dynamic-widget.component';
import { NodePresentationConfig } from '../widgets/core/types/node-presentation-config';
import { WidgetsByPosition } from '../widgets/core/types/widgets-by-position';
import { WidgetService } from '../widgets/widget.service';
import { ArrowIndicatorComponent } from './arrow-indicator/arrow-indicator.component';
import { NodeModel } from './types/node.model';

@Component({
  selector: 'app-node',
  imports: [
    CommonModule,
    DynamicWidgetComponent,
    RouterLink,
    ArrowIndicatorComponent,
  ],
  templateUrl: './node.component.html',
  styleUrl: './node.component.scss',
  host: {
    class: 'block',
  },
})
export class NodeComponent {
  data = input.required<NodeModel>();
  clickable = input<boolean>(true);
  presentationConfig = input<NodePresentationConfig>();

  private widgetService = inject(WidgetService);

  private resolvedPresentationConfig = computed(
    () => this.presentationConfig() ?? this.widgetService.getDefaultSettings(),
  );

  widgetsByPosition: Signal<WidgetsByPosition> = computed(() => {
    const properties = Object.keys(this.data());
    return this.widgetService.getWidgetsByPosition(
      properties,
      this.resolvedPresentationConfig(),
    );
  });

  protected showArrowIndicator = computed(
    () => this.resolvedPresentationConfig().showArrowIndicator ?? false,
  );

  detailsRoute = computed(() => {
    const id = this.data().id;
    return id ? ['/details', addUriPrefix(id)] : null;
  });
}
