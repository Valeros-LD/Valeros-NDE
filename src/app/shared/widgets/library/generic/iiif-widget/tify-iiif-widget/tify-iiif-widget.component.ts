import { Component } from '@angular/core';
import Tify from 'tify';
import { BaseIiifWidget } from '../base-iiif-widget';
import 'tify/dist/tify.css';

@Component({
  selector: 'app-tify-iiif-widget',
  imports: [],
  templateUrl: '../base-iiif-widget.html',
})
export class TifyIiifWidget extends BaseIiifWidget<Tify> {
  protected initializeViewer(manifestUrl: string, elementId: string): void {
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

    this.instances.set(elementId, instance);
  }

  protected destroyInstances(): void {
    this.instances.forEach((instance: Tify) => {
      instance.destroy();
    });
  }
}
