import { IconKey } from './icon.registry';

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
