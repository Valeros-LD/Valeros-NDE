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
