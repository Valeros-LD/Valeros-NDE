import { Injectable, inject, computed } from '@angular/core';
import { ConfigService } from '../../config/config.service';
import { getNestedValue } from '../data-utils/property-path.util';
import { NodeModel } from './types/node.model';

@Injectable({ providedIn: 'root' })
export class NodeImageResolverService {
  private configService = inject(ConfigService);

  private imagePaths = computed(
    () => this.configService.getConfig()?.imagePaths ?? ['image'],
  );

  getImageUrl(node: NodeModel): string | null {
    for (const path of this.imagePaths()) {
      const value = getNestedValue(node, path);
      if (typeof value === 'string' && value) {
        return value;
      }
    }
    return null;
  }

  hasImage(node: NodeModel): boolean {
    return !!this.getImageUrl(node);
  }
}
