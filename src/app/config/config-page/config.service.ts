import { computed, Injectable, signal } from '@angular/core';
import {
  FacetConfig,
  ValerosConfig,
  ViewsConfig,
} from '../schema/valeros-config.schema';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config = signal<ValerosConfig | null>(null);

  readonly loadError = signal<string | null>(null);

  readonly apiBaseUrl = computed(() => this.config()?.api.baseUrl ?? '');
  readonly facets = computed(() => this.config()?.facets ?? []);
  readonly presentation = computed(() => this.config()?.presentation);
  readonly views = computed(() => this.config()?.views);
  readonly defaultView = computed(
    () => this.config()?.views?.defaultView ?? 'list',
  );

  initialize(config: ValerosConfig): void {
    this.config.set(config);
  }

  setLoadError(message: string): void {
    this.loadError.set(message);
  }

  updateConfig(updates: Partial<ValerosConfig>): void {
    const current = this.config();
    if (current) {
      this.config.set({ ...current, ...updates });
    }
  }

  updateFacets(facets: FacetConfig[]): void {
    const current = this.config();
    if (current) {
      this.config.set({ ...current, facets });
    }
  }

  updatePresentation(
    presentation: Partial<ValerosConfig['presentation']>,
  ): void {
    const current = this.config();
    if (current) {
      this.config.set({
        ...current,
        presentation: { ...current.presentation, ...presentation },
      });
    }
  }

  updateViews(views: ViewsConfig): void {
    const current = this.config();
    if (current) {
      this.config.set({ ...current, views });
    }
  }

  getConfig(): ValerosConfig | null {
    return this.config();
  }
}
