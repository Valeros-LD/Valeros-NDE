import { Component, input, inject } from '@angular/core';
import { NodeModel } from '../types/node.model';
import { NodeLinkComponent } from '../node-link/node-link.component';
import { NodeImageResolverService } from '../node-image-resolver.service';

@Component({
  selector: 'app-node-link-list',
  imports: [NodeLinkComponent],
  templateUrl: './node-link-list.component.html',
})
export class NodeLinkListComponent {
  readonly nodes = input.required<NodeModel[]>();
  readonly showType = input<boolean>(false);

  protected imageResolver = inject(NodeImageResolverService);
}
