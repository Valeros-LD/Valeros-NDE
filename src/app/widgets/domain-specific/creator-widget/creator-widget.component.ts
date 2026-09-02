import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Signal,
} from '@angular/core';
import { normalizeToArray } from '../../../data-utils/value-normalization.util';
import { isNodeModel, NodeModel } from '../../../node/types/node.model';
import { BaseWidget } from '../../base-widget';
import { LinkWidget } from '../../generic/link-widget/link-widget.component';

interface RawCreator {
  role?: string[];
  creator?: NodeModel[];
}

interface NormalizedCreator {
  role: string[];
  creators: NodeModel[];
  nodeWithCreators: NodeModel;
}

@Component({
  selector: 'app-creator-widget',
  imports: [LinkWidget],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './creator-widget.component.html',
})
export class CreatorWidget extends BaseWidget {
  normalizedCreators: Signal<NormalizedCreator[]> = computed<
    NormalizedCreator[]
  >(() => {
    return this.values()
      .map((value) => value as RawCreator)
      .map((wrapper) => {
        const creators = normalizeToArray(wrapper.creator).filter(isNodeModel);
        return {
          role: normalizeToArray(wrapper.role),
          creators,
          nodeWithCreators: { id: 'creators', creators } as NodeModel,
        };
      })
      .filter((normalizedCreator) => normalizedCreator.creators.length > 0);
  });
}
