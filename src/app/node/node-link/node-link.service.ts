import { inject, Injectable } from '@angular/core';
import { ConfigService } from '../../config/config-page/config.service';
import { NodeModel } from '../types/node.model';

@Injectable({
  providedIn: 'root',
})
export class NodeLinkService {
  private configService = inject(ConfigService);

  isInternalLink(node: NodeModel): boolean {
    // TODO: Find a more sustainable way of considering links internal/external (see https://codeberg.org/limburg/lol/issues/28#issuecomment-20897900)
    const internalLinks = ['datalaag.valeros.nl', 'id.drapo.nl'];
    return internalLinks.some((link) => node.id.includes(link));
  }
}
