/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreativeWork = {
  __typename?: 'CreativeWork';
  about: Array<TermReference>;
  abstract: Array<LanguageString>;
  additionalType: Array<TermReference>;
  associatedMedia: Array<MediaObject>;
  contentLocation: Array<PlaceReference>;
  creator: Array<PersonReference>;
  creatorName: Array<LanguageString>;
  dateCreated?: Maybe<Scalars['String']['output']>;
  description: Array<LanguageString>;
  genre: Array<TermReference>;
  hasMedia: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  identifier: Array<Scalars['String']['output']>;
  iiifManifest?: Maybe<Scalars['String']['output']>;
  isPartOf: Array<DatasetReference>;
  locationCreated: Array<PlaceReference>;
  material: Array<TermReference>;
  name: Array<LanguageString>;
  sdDatePublished: Scalars['String']['output'];
  size: Array<LanguageString>;
  temporalCoverage: Array<Scalars['String']['output']>;
  text: Array<LanguageString>;
  type: Array<Scalars['String']['output']>;
};

export type CreativeWorkFacets = {
  __typename?: 'CreativeWorkFacets';
  about: Array<ValueBucket>;
  additionalType: Array<ValueBucket>;
  contentLocation: Array<ValueBucket>;
  creator: Array<ValueBucket>;
  genre: Array<ValueBucket>;
  hasMedia: Array<ValueBucket>;
  isPartOf: Array<ValueBucket>;
  license: Array<ValueBucket>;
  locationCreated: Array<ValueBucket>;
  material: Array<ValueBucket>;
  temporalCoverage: Array<ValueBucket>;
  type: Array<ValueBucket>;
};

export type CreativeWorkOrderBy = {
  direction?: SortDirection;
  field: CreativeWorkSortField;
};

export type CreativeWorkSearchResult = {
  __typename?: 'CreativeWorkSearchResult';
  facets: CreativeWorkFacets;
  items: Array<CreativeWork>;
  pagination: Pagination;
};

export enum CreativeWorkSortField {
  DateCreated = 'DATE_CREATED',
  Name = 'NAME',
  Relevance = 'RELEVANCE',
  SdDatePublished = 'SD_DATE_PUBLISHED'
}

export type CreativeWorkWhere = {
  about?: InputMaybe<StringFilter>;
  additionalType?: InputMaybe<StringFilter>;
  contentLocation?: InputMaybe<StringFilter>;
  creator?: InputMaybe<StringFilter>;
  dateCreated?: InputMaybe<DateRange>;
  genre?: InputMaybe<StringFilter>;
  hasMedia?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<StringFilter>;
  identifier?: InputMaybe<StringFilter>;
  isPartOf?: InputMaybe<StringFilter>;
  license?: InputMaybe<StringFilter>;
  locationCreated?: InputMaybe<StringFilter>;
  material?: InputMaybe<StringFilter>;
  sdDatePublished?: InputMaybe<DateRange>;
  temporalCoverage?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type Dataset = {
  __typename?: 'Dataset';
  id: Scalars['String']['output'];
  label: Array<LanguageString>;
  license: Array<Scalars['String']['output']>;
  publisher: Array<OrganizationReference>;
};

export type DatasetFacets = {
  __typename?: 'DatasetFacets';
  license: Array<ValueBucket>;
  publisher: Array<ValueBucket>;
};

export type DatasetOrderBy = {
  direction?: SortDirection;
  field: DatasetSortField;
};

export type DatasetReference = {
  __typename?: 'DatasetReference';
  id: Scalars['String']['output'];
  name: Array<LanguageString>;
};

export type DatasetSearchResult = {
  __typename?: 'DatasetSearchResult';
  facets: DatasetFacets;
  items: Array<Dataset>;
  pagination: Pagination;
};

export enum DatasetSortField {
  Label = 'LABEL',
  Relevance = 'RELEVANCE'
}

export type DatasetWhere = {
  id?: InputMaybe<StringFilter>;
  license?: InputMaybe<StringFilter>;
  publisher?: InputMaybe<StringFilter>;
};

export type DateRange = {
  max?: InputMaybe<Scalars['String']['input']>;
  min?: InputMaybe<Scalars['String']['input']>;
};

export type FloatRange = {
  max?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
};

export type LanguageString = {
  __typename?: 'LanguageString';
  language?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type MediaObject = {
  __typename?: 'MediaObject';
  contentUrl?: Maybe<Scalars['String']['output']>;
  copyrightNotice: Array<LanguageString>;
  encodingFormat: Array<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  license?: Maybe<Scalars['String']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
};

export type Occupation = {
  __typename?: 'Occupation';
  id: Scalars['String']['output'];
  label: Array<LanguageString>;
};

export type OccupationOrderBy = {
  direction?: SortDirection;
  field: OccupationSortField;
};

export type OccupationReference = {
  __typename?: 'OccupationReference';
  id: Scalars['String']['output'];
  name: Array<LanguageString>;
};

export type OccupationSearchResult = {
  __typename?: 'OccupationSearchResult';
  items: Array<Occupation>;
  pagination: Pagination;
};

export enum OccupationSortField {
  Label = 'LABEL',
  Relevance = 'RELEVANCE'
}

export type OccupationWhere = {
  id?: InputMaybe<StringFilter>;
};

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['String']['output'];
  label: Array<LanguageString>;
  location: Array<PlaceReference>;
};

export type OrganizationFacets = {
  __typename?: 'OrganizationFacets';
  location: Array<ValueBucket>;
};

export type OrganizationOrderBy = {
  direction?: SortDirection;
  field: OrganizationSortField;
};

export type OrganizationReference = {
  __typename?: 'OrganizationReference';
  id: Scalars['String']['output'];
  name: Array<LanguageString>;
};

export type OrganizationSearchResult = {
  __typename?: 'OrganizationSearchResult';
  facets: OrganizationFacets;
  items: Array<Organization>;
  pagination: Pagination;
};

export enum OrganizationSortField {
  Label = 'LABEL',
  Relevance = 'RELEVANCE'
}

export type OrganizationWhere = {
  id?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  perPage: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Person = {
  __typename?: 'Person';
  birthDate?: Maybe<Scalars['String']['output']>;
  birthPlace: Array<PlaceReference>;
  deathDate?: Maybe<Scalars['String']['output']>;
  deathPlace: Array<PlaceReference>;
  hasOccupation: Array<OccupationReference>;
  id: Scalars['String']['output'];
  label: Array<LanguageString>;
};

export type PersonFacets = {
  __typename?: 'PersonFacets';
  birthPlace: Array<ValueBucket>;
  deathPlace: Array<ValueBucket>;
  hasOccupation: Array<ValueBucket>;
};

export type PersonOrderBy = {
  direction?: SortDirection;
  field: PersonSortField;
};

export type PersonReference = {
  __typename?: 'PersonReference';
  id: Scalars['String']['output'];
  name: Array<LanguageString>;
};

export type PersonSearchResult = {
  __typename?: 'PersonSearchResult';
  facets: PersonFacets;
  items: Array<Person>;
  pagination: Pagination;
};

export enum PersonSortField {
  BirthDate = 'BIRTH_DATE',
  DeathDate = 'DEATH_DATE',
  Label = 'LABEL',
  Relevance = 'RELEVANCE'
}

export type PersonWhere = {
  birthDate?: InputMaybe<DateRange>;
  birthPlace?: InputMaybe<StringFilter>;
  deathDate?: InputMaybe<DateRange>;
  deathPlace?: InputMaybe<StringFilter>;
  hasOccupation?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
};

export type Place = {
  __typename?: 'Place';
  addressCountry: Array<Scalars['String']['output']>;
  addressLocality: Array<Scalars['String']['output']>;
  addressRegion: Array<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  label: Array<LanguageString>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  postalCode: Array<Scalars['String']['output']>;
  streetAddress: Array<Scalars['String']['output']>;
};

export type PlaceFacets = {
  __typename?: 'PlaceFacets';
  addressCountry: Array<ValueBucket>;
  addressLocality: Array<ValueBucket>;
  addressRegion: Array<ValueBucket>;
};

export type PlaceOrderBy = {
  direction?: SortDirection;
  field: PlaceSortField;
};

export type PlaceReference = {
  __typename?: 'PlaceReference';
  id: Scalars['String']['output'];
  name: Array<LanguageString>;
};

export type PlaceSearchResult = {
  __typename?: 'PlaceSearchResult';
  facets: PlaceFacets;
  items: Array<Place>;
  pagination: Pagination;
};

export enum PlaceSortField {
  Label = 'LABEL',
  Relevance = 'RELEVANCE'
}

export type PlaceWhere = {
  addressCountry?: InputMaybe<StringFilter>;
  addressLocality?: InputMaybe<StringFilter>;
  addressRegion?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  latitude?: InputMaybe<FloatRange>;
  longitude?: InputMaybe<FloatRange>;
  postalCode?: InputMaybe<StringFilter>;
  streetAddress?: InputMaybe<StringFilter>;
};

export type Query = {
  __typename?: 'Query';
  creativeWorks: CreativeWorkSearchResult;
  datasets: DatasetSearchResult;
  occupations: OccupationSearchResult;
  organizations: OrganizationSearchResult;
  persons: PersonSearchResult;
  places: PlaceSearchResult;
  terms: TermSearchResult;
};


export type QueryCreativeWorksArgs = {
  orderBy?: InputMaybe<CreativeWorkOrderBy>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<CreativeWorkWhere>;
};


export type QueryDatasetsArgs = {
  orderBy?: InputMaybe<DatasetOrderBy>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<DatasetWhere>;
};


export type QueryOccupationsArgs = {
  orderBy?: InputMaybe<OccupationOrderBy>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<OccupationWhere>;
};


export type QueryOrganizationsArgs = {
  orderBy?: InputMaybe<OrganizationOrderBy>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<OrganizationWhere>;
};


export type QueryPersonsArgs = {
  orderBy?: InputMaybe<PersonOrderBy>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PersonWhere>;
};


export type QueryPlacesArgs = {
  orderBy?: InputMaybe<PlaceOrderBy>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PlaceWhere>;
};


export type QueryTermsArgs = {
  orderBy?: InputMaybe<TermOrderBy>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TermWhere>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringFilter = {
  in?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Term = {
  __typename?: 'Term';
  id: Scalars['String']['output'];
  label: Array<LanguageString>;
  sameAs: Array<Scalars['String']['output']>;
};

export type TermFacets = {
  __typename?: 'TermFacets';
  sameAs: Array<ValueBucket>;
};

export type TermOrderBy = {
  direction?: SortDirection;
  field: TermSortField;
};

export type TermReference = {
  __typename?: 'TermReference';
  id: Scalars['String']['output'];
  name: Array<LanguageString>;
};

export type TermSearchResult = {
  __typename?: 'TermSearchResult';
  facets: TermFacets;
  items: Array<Term>;
  pagination: Pagination;
};

export enum TermSortField {
  Label = 'LABEL',
  Relevance = 'RELEVANCE'
}

export type TermWhere = {
  id?: InputMaybe<StringFilter>;
  sameAs?: InputMaybe<StringFilter>;
};

export type ValueBucket = {
  __typename?: 'ValueBucket';
  count: Scalars['Int']['output'];
  label?: Maybe<Array<LanguageString>>;
  value: Scalars['String']['output'];
};

export type CreativeWorkByIdQueryVariables = Exact<{
  id: string;
}>;


export type CreativeWorkByIdQuery = { creativeWorks: { items: Array<{ id: string, type: Array<string>, sdDatePublished: string, identifier: Array<string>, temporalCoverage: Array<string>, dateCreated: string | null, iiifManifest: string | null, hasMedia: boolean, name: Array<{ value: string, language: string | null }>, isPartOf: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, creator: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, creatorName: Array<{ value: string, language: string | null }>, additionalType: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, description: Array<{ value: string, language: string | null }>, abstract: Array<{ value: string, language: string | null }>, text: Array<{ value: string, language: string | null }>, size: Array<{ value: string, language: string | null }>, contentLocation: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, locationCreated: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, about: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, material: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, genre: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, associatedMedia: Array<{ id: string | null, thumbnailUrl: string | null, contentUrl: string | null, license: string | null, encodingFormat: Array<string>, copyrightNotice: Array<{ value: string, language: string | null }> }> }> } };

export type DatasetReferenceFieldsFragment = { id: string, name: Array<{ value: string, language: string | null }> };

export type PersonReferenceFieldsFragment = { id: string, name: Array<{ value: string, language: string | null }> };

export type PlaceReferenceFieldsFragment = { id: string, name: Array<{ value: string, language: string | null }> };

export type TermReferenceFieldsFragment = { id: string, name: Array<{ value: string, language: string | null }> };

export type MediaObjectFieldsFragment = { id: string | null, thumbnailUrl: string | null, contentUrl: string | null, license: string | null, encodingFormat: Array<string>, copyrightNotice: Array<{ value: string, language: string | null }> };

export type CreativeWorkFieldsFragment = { id: string, type: Array<string>, sdDatePublished: string, identifier: Array<string>, temporalCoverage: Array<string>, dateCreated: string | null, iiifManifest: string | null, hasMedia: boolean, name: Array<{ value: string, language: string | null }>, isPartOf: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, creator: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, creatorName: Array<{ value: string, language: string | null }>, additionalType: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, description: Array<{ value: string, language: string | null }>, abstract: Array<{ value: string, language: string | null }>, text: Array<{ value: string, language: string | null }>, size: Array<{ value: string, language: string | null }>, contentLocation: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, locationCreated: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, about: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, material: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, genre: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, associatedMedia: Array<{ id: string | null, thumbnailUrl: string | null, contentUrl: string | null, license: string | null, encodingFormat: Array<string>, copyrightNotice: Array<{ value: string, language: string | null }> }> };

export type CreativeWorkFacetFieldsFragment = { type: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, isPartOf: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, creator: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, additionalType: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, contentLocation: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, temporalCoverage: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, locationCreated: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, about: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, material: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, genre: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, license: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, hasMedia: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }> };

export type TermFieldsFragment = { id: string, sameAs: Array<string>, label: Array<{ value: string, language: string | null }> };

export type SearchCreativeWorksQueryVariables = Exact<{
  query?: string | null | undefined;
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type SearchCreativeWorksQuery = { creativeWorks: { items: Array<{ id: string, type: Array<string>, sdDatePublished: string, identifier: Array<string>, temporalCoverage: Array<string>, dateCreated: string | null, iiifManifest: string | null, hasMedia: boolean, name: Array<{ value: string, language: string | null }>, isPartOf: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, creator: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, creatorName: Array<{ value: string, language: string | null }>, additionalType: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, description: Array<{ value: string, language: string | null }>, abstract: Array<{ value: string, language: string | null }>, text: Array<{ value: string, language: string | null }>, size: Array<{ value: string, language: string | null }>, contentLocation: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, locationCreated: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, about: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, material: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, genre: Array<{ id: string, name: Array<{ value: string, language: string | null }> }>, associatedMedia: Array<{ id: string | null, thumbnailUrl: string | null, contentUrl: string | null, license: string | null, encodingFormat: Array<string>, copyrightNotice: Array<{ value: string, language: string | null }> }> }>, pagination: { total: number, page: number, perPage: number }, facets: { type: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, isPartOf: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, creator: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, additionalType: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, contentLocation: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, temporalCoverage: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, locationCreated: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, about: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, material: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, genre: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, license: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }>, hasMedia: Array<{ value: string, count: number, label: Array<{ value: string, language: string | null }> | null }> } } };

export type SearchTermsQueryVariables = Exact<{
  query?: string | null | undefined;
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type SearchTermsQuery = { terms: { items: Array<{ id: string, sameAs: Array<string>, label: Array<{ value: string, language: string | null }> }>, pagination: { total: number, page: number, perPage: number } } };

export const DatasetReferenceFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DatasetReferenceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DatasetReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]} as unknown as DocumentNode<DatasetReferenceFieldsFragment, unknown>;
export const PersonReferenceFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonReferenceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]} as unknown as DocumentNode<PersonReferenceFieldsFragment, unknown>;
export const TermReferenceFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TermReferenceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TermReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]} as unknown as DocumentNode<TermReferenceFieldsFragment, unknown>;
export const PlaceReferenceFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceReferenceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]} as unknown as DocumentNode<PlaceReferenceFieldsFragment, unknown>;
export const MediaObjectFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaObjectFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaObject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"contentUrl"}},{"kind":"Field","name":{"kind":"Name","value":"license"}},{"kind":"Field","name":{"kind":"Name","value":"copyrightNotice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"encodingFormat"}}]}}]} as unknown as DocumentNode<MediaObjectFieldsFragment, unknown>;
export const CreativeWorkFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CreativeWorkFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreativeWork"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sdDatePublished"}},{"kind":"Field","name":{"kind":"Name","value":"isPartOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatasetReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creatorName"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"additionalType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TermReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"abstract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"temporalCoverage"}},{"kind":"Field","name":{"kind":"Name","value":"locationCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateCreated"}},{"kind":"Field","name":{"kind":"Name","value":"about"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TermReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"material"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TermReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TermReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"associatedMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaObjectFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"iiifManifest"}},{"kind":"Field","name":{"kind":"Name","value":"hasMedia"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DatasetReferenceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DatasetReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonReferenceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TermReferenceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TermReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceReferenceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaObjectFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaObject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"contentUrl"}},{"kind":"Field","name":{"kind":"Name","value":"license"}},{"kind":"Field","name":{"kind":"Name","value":"copyrightNotice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"encodingFormat"}}]}}]} as unknown as DocumentNode<CreativeWorkFieldsFragment, unknown>;
export const CreativeWorkFacetFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CreativeWorkFacetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreativeWorkFacets"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPartOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"temporalCoverage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"locationCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"about"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"material"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"license"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hasMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]}}]} as unknown as DocumentNode<CreativeWorkFacetFieldsFragment, unknown>;
export const TermFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TermFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Term"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sameAs"}}]}}]} as unknown as DocumentNode<TermFieldsFragment, unknown>;
export const CreativeWorkByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CreativeWorkById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creativeWorks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CreativeWorkFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DatasetReferenceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DatasetReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonReferenceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TermReferenceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TermReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceReferenceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaObjectFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaObject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"contentUrl"}},{"kind":"Field","name":{"kind":"Name","value":"license"}},{"kind":"Field","name":{"kind":"Name","value":"copyrightNotice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"encodingFormat"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CreativeWorkFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreativeWork"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sdDatePublished"}},{"kind":"Field","name":{"kind":"Name","value":"isPartOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatasetReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creatorName"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"additionalType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TermReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"abstract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"temporalCoverage"}},{"kind":"Field","name":{"kind":"Name","value":"locationCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateCreated"}},{"kind":"Field","name":{"kind":"Name","value":"about"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TermReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"material"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TermReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TermReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"associatedMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaObjectFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"iiifManifest"}},{"kind":"Field","name":{"kind":"Name","value":"hasMedia"}}]}}]} as unknown as DocumentNode<CreativeWorkByIdQuery, CreativeWorkByIdQueryVariables>;
export const SearchCreativeWorksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchCreativeWorks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creativeWorks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CreativeWorkFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CreativeWorkFacetFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DatasetReferenceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DatasetReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PersonReferenceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TermReferenceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TermReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceReferenceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaObjectFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaObject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"contentUrl"}},{"kind":"Field","name":{"kind":"Name","value":"license"}},{"kind":"Field","name":{"kind":"Name","value":"copyrightNotice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"encodingFormat"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CreativeWorkFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreativeWork"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sdDatePublished"}},{"kind":"Field","name":{"kind":"Name","value":"isPartOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatasetReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PersonReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creatorName"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"additionalType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TermReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"abstract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"temporalCoverage"}},{"kind":"Field","name":{"kind":"Name","value":"locationCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateCreated"}},{"kind":"Field","name":{"kind":"Name","value":"about"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TermReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"material"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TermReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TermReferenceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"associatedMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaObjectFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"iiifManifest"}},{"kind":"Field","name":{"kind":"Name","value":"hasMedia"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CreativeWorkFacetFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreativeWorkFacets"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPartOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"temporalCoverage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"locationCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"about"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"material"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"license"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hasMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]}}]} as unknown as DocumentNode<SearchCreativeWorksQuery, SearchCreativeWorksQueryVariables>;
export const SearchTermsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchTerms"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"terms"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TermFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TermFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Term"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sameAs"}}]}}]} as unknown as DocumentNode<SearchTermsQuery, SearchTermsQueryVariables>;