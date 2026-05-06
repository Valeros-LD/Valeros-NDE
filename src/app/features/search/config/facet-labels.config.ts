export const FACET_LABELS: Record<string, string> = {
  additionalType: 'Soort (aanvullend)',
  contentLocation: 'Locatie',
  creator: 'Vervaardiger',
  dataset: 'Dataset',
  genre: 'Genre',
  license: 'Licentie',
  material: 'Materiaal',
  publisher: 'Uitgever',
  subject: 'Onderwerp',
};

export function getFacetLabel(facetName: string): string {
  return FACET_LABELS[facetName] || facetName;
}
