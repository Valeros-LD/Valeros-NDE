import { Component, inject, input } from '@angular/core';
import { NodeImageResolverService } from '../node-image-resolver.service';
import { NodeLinkMode } from '../node-link/node-link-mode';
import { NodeLinkComponent } from '../node-link/node-link.component';
import { NodeModel } from '../types/node.model';

@Component({
  selector: 'app-node-link-list',
  imports: [NodeLinkComponent],
  templateUrl: './node-link-list.component.html',
})
export class NodeLinkListComponent {
  readonly nodes = input.required<NodeModel[]>();
  readonly showType = input<boolean>(false);
  readonly mode = input<NodeLinkMode | 'auto'>('auto');

  protected imageResolver = inject(NodeImageResolverService);

  protected getNodeMode(node: NodeModel): NodeLinkMode {
    if (this.mode() !== 'auto') {
      return this.mode() as NodeLinkMode;
    }
    return this.imageResolver.hasImage(node) ? 'image-card' : 'inline';
  }
}
