import { Component, computed } from '@angular/core';
import { BaseWidget } from '../../../infrastructure/base-widget';
import {
  AssociatedMediaNode,
  hasIIIFPresentationManifest,
} from '../../../../node/types/associated-media.node';
import { ImageGalleryWidget } from '../image-gallery-widget/image-gallery-widget.component';
import { TifyIiifWidget } from '../iiif-widget/tify-iiif-widget/tify-iiif-widget.component';

@Component({
  selector: 'app-media-widget',
  imports: [ImageGalleryWidget, TifyIiifWidget],
  templateUrl: './media-widget.component.html',
})
export class MediaWidget extends BaseWidget {
  readonly hasManifest = computed(() => {
    const media = this.values() as AssociatedMediaNode[];
    return hasIIIFPresentationManifest(media);
  });
}
