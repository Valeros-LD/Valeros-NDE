import { Component, computed } from '@angular/core';
import {
  AssociatedMediaNode,
  hasIIIFPresentationManifest,
} from '../../../node/types/associated-media.node';
import { BaseWidget } from '../../base-widget';
import { TifyIiifWidget } from '../iiif-widget/tify-iiif-widget/tify-iiif-widget.component';
import { ImageGalleryWidget } from '../image-gallery-widget/image-gallery-widget.component';

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
