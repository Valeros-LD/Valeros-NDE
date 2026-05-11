import { Component, computed } from '@angular/core';
import { BaseWidget } from '../../../infrastructure/base-widget';
import {
  AssociatedMediaNode,
  hasIIIFPresentationManifest,
} from '../../../../node/types/associated-media.node';
import { IiifWidget } from '../iiif-widget/iiif-widget.component';
import { ImageGalleryWidget } from '../image-gallery-widget/image-gallery-widget.component';

@Component({
  selector: 'app-media-widget',
  imports: [IiifWidget, ImageGalleryWidget],
  templateUrl: './media-widget.component.html',
})
export class MediaWidget extends BaseWidget {
  readonly hasManifest = computed(() => {
    const media = this.values() as AssociatedMediaNode[];
    return hasIIIFPresentationManifest(media);
  });
}
