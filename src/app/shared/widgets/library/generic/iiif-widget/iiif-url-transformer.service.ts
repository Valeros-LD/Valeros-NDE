import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IiifUrlTransformerService {
  transformManifestUrl(originalUrl: string): string {
    return `https://proxy.valeros.nl/${originalUrl}`;
  }
}
