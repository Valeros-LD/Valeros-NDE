import {
  Component,
  computed,
  inject,
  signal,
  effect,
  Signal,
} from '@angular/core';
import { BaseWidget } from '../../../infrastructure/base-widget';
import { ApiService } from '../../../../api/api.service';
import { SearchResponse } from '../../../../../features/search/types/search-response';
import { NodeLinkComponent } from '../../../../node/node-link/node-link.component';
import { LoadingSpinnerComponent } from '../../../../ui/loading-spinner/loading-spinner.component';
import { ErrorAlertComponent } from '../../../../ui/error-alert/error-alert.component';
import { normalizeToFirst } from '../../../../data-utils/value-normalization.util';

@Component({
  selector: 'app-referring-nodes-widget',
  imports: [NodeLinkComponent, LoadingSpinnerComponent, ErrorAlertComponent],
  templateUrl: './referring-nodes-widget.component.html',
})
export class ReferringNodesWidget extends BaseWidget {
  protected readonly searchResponse = signal<SearchResponse | null>(null);
  protected readonly loading = signal<boolean>(false);
  protected readonly error = signal<string | null>(null);

  private apiService = inject(ApiService);

  private nodeId: Signal<string | null> = computed(() => {
    const value = normalizeToFirst(this.values());
    return value ? String(value) : null;
  });

  protected readonly totalReferringNodes = computed(
    () => this.searchResponse()?.partOf.totalItems ?? 0,
  );

  protected readonly referringNodes = computed(
    () => this.searchResponse()?.orderedItems ?? [],
  );

  protected readonly hasResults = computed(
    () => this.totalReferringNodes() > 0,
  );

  constructor() {
    super();
    effect(() => {
      const id = this.nodeId();
      if (id) {
        this.fetchReferringNodes(id);
      }
    });
  }

  private fetchReferringNodes(id: string) {
    this.loading.set(true);
    this.error.set(null);

    this.apiService
      .search({
        page: 0,
        filter: `*.id:${id}`,
      })
      .subscribe({
        next: (response: SearchResponse) => {
          this.searchResponse.set(response);
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set('Failed to load referring nodes: ' + err.message);
          this.loading.set(false);
        },
      });
  }
}
