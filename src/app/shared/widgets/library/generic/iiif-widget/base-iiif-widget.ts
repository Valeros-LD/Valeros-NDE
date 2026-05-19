import {
  Directive,
  AfterViewInit,
  OnDestroy,
  computed,
  Signal,
} from '@angular/core';
import { BaseWidget } from '../../../infrastructure/base-widget';
import {
  AssociatedMediaNode,
  isIIIFPresentationManifest,
} from '../../../../node/types/associated-media.node';

@Directive()
export abstract class BaseIiifWidget<T = unknown>
  extends BaseWidget
  implements AfterViewInit, OnDestroy
{
  protected readonly instanceId = crypto.randomUUID();
  protected readonly instances: Map<string, T> = new Map();

  manifestUrls: Signal<string[]> = computed(() => {
    return (this.values() as AssociatedMediaNode[])
      .filter(isIIIFPresentationManifest)
      .map((v) => v.id)
      .filter((url): url is string => typeof url === 'string' && url !== '');
  });

  ngAfterViewInit(): void {
    this.manifestUrls().forEach((manifestUrl, index) => {
      const elementId = this.getElementId(index);
      void this.initializeViewer(manifestUrl, elementId);
    });
  }

  ngOnDestroy(): void {
    this.destroyInstances();
    this.instances.clear();
  }

  protected abstract initializeViewer(
    manifestUrl: string,
    elementId: string,
  ): void | Promise<void>;

  protected abstract destroyInstances(): void;

  protected getElementId(index: number): string {
    return `iiif-viewer-${this.instanceId}-${index}`;
  }
}
