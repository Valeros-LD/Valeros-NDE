import { IconKey } from './icon.registry';

export interface FacetConfig {
  name: string;
  label: string;
  icon?: IconKey;
  hidden?: boolean;
}

export const FACETS_CONFIG: FacetConfig[] = [
  { name: 'dataset', label: 'Collectie', icon: 'archive' },
  { name: 'contentLocation', label: 'Locatie', icon: 'map-pin' },
  { name: 'creator', label: 'Vervaardiger', icon: 'user' },
  { name: 'locationCreated', label: 'Locatie', icon: 'map-pin' },
  { name: 'subject', label: 'Onderwerp', icon: 'tag' },
  { name: 'genre', label: 'Genre', icon: 'tag' },
  { name: 'material', label: 'Materiaal', icon: 'package' },
  {
    name: 'type',
    label: 'Soort',
    icon: 'grid',
    hidden: true,
  },
  {
    name: 'additionalType',
    label: 'Soort',
    icon: 'grid',
  },
  { name: 'publisher', label: 'Uitgever', icon: 'users' },
  { name: 'license', label: 'Licentie', icon: 'file-text' },
  { name: 'about', label: 'Over', icon: 'info' },
  { name: 'hasMedia', label: 'Met afbeelding', icon: 'image' },
  { name: 'isPartOf', label: '', hidden: true },
];
