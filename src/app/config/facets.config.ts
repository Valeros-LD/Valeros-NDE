import { IconType } from '@ng-icons/core';
import { IconKey, getIcon } from '../shared/icons/icon.registry';

export interface FacetConfig {
  name: string;
  label: string;
  icon?: IconKey;
  hidden?: boolean;
}

export const FACETS_CONFIG: FacetConfig[] = [
  { name: 'dataset', label: 'Dataset', icon: 'feather-archive' },
  { name: 'contentLocation', label: 'Locatie', icon: 'feather-map-pin' },
  { name: 'creator', label: 'Vervaardiger', icon: 'feather-user' },
  { name: 'subject', label: 'Onderwerp', icon: 'feather-tag' },
  { name: 'genre', label: 'Genre', icon: 'feather-tag' },
  { name: 'material', label: 'Materiaal', icon: 'feather-package' },
  {
    name: 'additionalType',
    label: 'Soort (aanvullend)',
    icon: 'feather-grid',
  },
  { name: 'publisher', label: 'Uitgever', icon: 'feather-users' },
  { name: 'license', label: 'Licentie', icon: 'feather-file-text' },
];

const facetConfigMap = new Map(
  FACETS_CONFIG.map((config) => [config.name, config]),
);

export function getFacetLabel(facetName: string): string {
  return facetConfigMap.get(facetName)?.label || facetName;
}

export function isFacetHidden(facetName: string): boolean {
  return facetConfigMap.get(facetName)?.hidden ?? false;
}

export function getFacetIconKey(facetName: string): IconKey | undefined {
  return facetConfigMap.get(facetName)?.icon;
}

export function getFacetIcon(facetName: string): IconType | undefined {
  const iconKey = getFacetIconKey(facetName);
  return iconKey ? getIcon(iconKey) : undefined;
}

export function sortFacets<T extends { name: string }>(facets: T[]): T[] {
  const orderMap = new Map(
    FACETS_CONFIG.map((config, index) => [config.name, index]),
  );

  return [...facets].sort((a, b) => {
    const orderA = orderMap.get(a.name) ?? 999;
    const orderB = orderMap.get(b.name) ?? 999;
    return orderA - orderB;
  });
}
