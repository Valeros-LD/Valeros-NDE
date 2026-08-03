import { inject, Injectable } from '@angular/core';
import { ConfigService } from '../../config/config-page/config.service';
import { NodeModel } from '../types/node.model';

@Injectable({
  providedIn: 'root',
})
export class NodeLinkService {
  private configService = inject(ConfigService);

  isInternalLink(node: NodeModel): boolean {
    // TODO: Bring back a way of considering links internal/external
    return true;
  }
}
