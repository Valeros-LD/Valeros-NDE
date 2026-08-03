import { NodeModel } from '../node/types/node.model';
import { Facet } from '../search/types/facet';
import { Filters } from '../search/types/filters';
import { SearchQuery } from '../search/types/search-query';
import { SearchResponse } from '../search/types/search-response';
import {
  CreativeWorkFacetFieldsFragment,
  CreativeWorkFieldsFragment,
  TermFieldsFragment,
} from './graphql/generated';
import {
  CreativeWorkWhere,
  Pagination,
  StringFilter,
} from './graphql/schema-types';

// TODO: Skip most of this normalization logic in favor of using the GraphQL types directly
// This module is mostly here to keep the previously existing REST API surface intact
type LocalizedValue = { value: string; language?: string | null };
type ReferenceValue = { id: string; name: LocalizedValue[] };

function isLocalizedValue(value: unknown): value is LocalizedValue {
  return (
    !!value &&
    typeof value === 'object' &&
    'value' in value &&
    'language' in value
  );
}

function isReferenceValue(value: unknown): value is ReferenceValue {
  return (
    !!value && typeof value === 'object' && 'id' in value && 'name' in value
  );
}

function pickLocalizedValue(
  values: LocalizedValue[] | undefined | null,
  preferredLanguage: string,
): string | undefined {
  if (!values?.length) return undefined;
  return (
    values.find((value) => value.language === preferredLanguage)?.value ??
    values[0].value
  );
}

function toReferenceNode(
  reference: ReferenceValue,
  preferredLanguage: string,
): NodeModel {
  return {
    id: reference.id,
    name: pickLocalizedValue(reference.name, preferredLanguage),
  };
}

function normalizeGraphQlValue(
  value: unknown,
  preferredLanguage: string,
): unknown {
  if (Array.isArray(value)) {
    if (value.length === 0) return value;
    if (value.every(isLocalizedValue)) {
      return pickLocalizedValue(value, preferredLanguage);
    }
    if (value.every(isReferenceValue)) {
      return value.map((reference) =>
        toReferenceNode(reference, preferredLanguage),
      );
    }
    return value;
  }

  if (isReferenceValue(value)) {
    return toReferenceNode(value, preferredLanguage);
  }

  return value;
}

function isEmptyValue(value: unknown): boolean {
  return (
    value === null ||
    value === undefined ||
    value === '' ||
    (Array.isArray(value) && value.length === 0)
  );
}

export function normalizeGraphQlItem<T extends object>(
  item: T,
  preferredLanguage: string,
): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(item)
      .map(
        ([key, value]) =>
          [key, normalizeGraphQlValue(value, preferredLanguage)] as const,
      )
      .filter(([, value]) => !isEmptyValue(value)),
  );
}

export function toFacets(
  facets: CreativeWorkFacetFieldsFragment,
  preferredLanguage: string,
): Facet[] {
  return Object.entries(facets)
    .filter(([, buckets]) => buckets.length > 0)
    .map(([name, buckets]) => ({
      type: 'OrderedCollection' as const,
      name,
      orderedItems: buckets.map((bucket) => ({
        type: 'FacetValue' as const,
        value: bucket.value,
        label: pickLocalizedValue(bucket.label, preferredLanguage),
        count: bucket.count,
      })),
    }));
}

export function toSearchResponse<TItem>(
  page: number,
  pagination: Pagination,
  items: TItem[],
  mapItem: (item: TItem) => NodeModel,
  facets: Facet[] = [],
): SearchResponse {
  return {
    id: `graphql-search-page-${page}`,
    type: 'OrderedCollectionPage',
    partOf: {
      id: 'graphql-search',
      type: 'OrderedCollection',
      totalItems: pagination.total,
      facets,
    },
    startIndex: (page - 1) * pagination.perPage,
    orderedItems: items.map(mapItem),
  };
}

export function toCreativeWorkWhere(filters: Filters): CreativeWorkWhere {
  const where: Record<string, StringFilter | boolean> = {};

  for (const [facetName, values] of Object.entries(filters)) {
    if (values.size === 0) continue;

    if (facetName === 'hasMedia') {
      where[facetName] = values.has('true');
      continue;
    }

    where[facetName] = { in: Array.from(values) };
  }

  return where as CreativeWorkWhere;
}

export function toSearchVariables(query: SearchQuery): {
  page: number;
  perPage: number;
  searchTerm: string | undefined;
} {
  return {
    page: query.page ?? 1,
    perPage: query.size ?? 20,
    searchTerm: query.q && query.q !== '*' ? query.q : undefined,
  };
}

export function mapCreativeWork(
  item: CreativeWorkFieldsFragment,
  preferredLanguage: string,
): NodeModel {
  return normalizeGraphQlItem(item, preferredLanguage) as NodeModel;
}

export function mapTerm(
  item: TermFieldsFragment,
  preferredLanguage: string,
): NodeModel {
  const normalizedNode = normalizeGraphQlItem(
    item,
    preferredLanguage,
  ) as NodeModel;
  if ('label' in normalizedNode) {
    normalizedNode['name'] = normalizedNode['label'];
  }
  return normalizedNode;
}
