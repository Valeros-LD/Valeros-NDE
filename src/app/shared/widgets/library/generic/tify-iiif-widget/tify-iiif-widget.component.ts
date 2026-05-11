import { Component, AfterViewInit, OnDestroy, computed } from '@angular/core';
import Tify from 'tify';
import { BaseWidget } from '../../../infrastructure/base-widget';
import {
  AssociatedMediaNode,
  isIIIFPresentationManifest,
} from '../../../../node/types/associated-media.node';
import 'tify/dist/tify.css';

@Component({
  selector: 'app-tify-iiif-widget',
  imports: [],
  templateUrl: './tify-iiif-widget.component.html',
})
export class TifyIiifWidget
  extends BaseWidget
  implements AfterViewInit, OnDestroy
{
  private tifyInstances: Map<string, Tify> = new Map();
  readonly instanceId = crypto.randomUUID();

  manifestUrls = computed(() => {
    return (this.values() as AssociatedMediaNode[])
      .filter(isIIIFPresentationManifest)
      .map((v) => v.id)
      .filter((url): url is string => typeof url === 'string' && url !== '');
  });

  ngAfterViewInit(): void {
    this.manifestUrls().forEach((manifestUrl, index) => {
      const elementId = this.getTifyElementId(index);
      this.initializeTify(manifestUrl, elementId);
    });
  }

  ngOnDestroy(): void {
    this.tifyInstances.forEach((instance: Tify) => {
      instance.destroy();
    });
    this.tifyInstances.clear();
  }

  private initializeTify(manifestUrl: string, elementId: string): void {
    const element = document.getElementById(elementId);
    if (!element) {
      return;
    }

    // TODO: Remove dev CORS proxy
    const proxiedManifestUrl = `https://corsproxy.io/?${encodeURIComponent(manifestUrl)}`;

    const instance = new Tify({
      container: `#${elementId}`,
      manifestUrl: proxiedManifestUrl,
    });

    this.tifyInstances.set(elementId, instance);
  }

  getTifyElementId(index: number): string {
    return `tify-${this.instanceId}-${index}`;
  }
}
