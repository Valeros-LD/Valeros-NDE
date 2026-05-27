import { Directive, input } from '@angular/core';
import { NodeModel } from '../../node/types/node.model';
import { NodePresentationConfig } from '../../widgets/core/types/node-presentation-config';
import { BaseViewOptions } from './types/view-options';

@Directive()
export abstract class BaseResultsView {
  results = input.required<NodeModel[]>();
  totalResults = input.required<number>();
  currentPage = input.required<number>();
  pageSize = input.required<number>();
  options = input<BaseViewOptions>({});
  presentationConfig = input.required<NodePresentationConfig>();
}
