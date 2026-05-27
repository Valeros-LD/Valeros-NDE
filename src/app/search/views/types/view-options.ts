export interface BaseViewOptions {
  pageSize?: number;
  showPagination?: boolean;
  showResultsCount?: boolean;
  showSort?: boolean;
  hidden?: boolean;
}

export type ViewOptions = BaseViewOptions & Record<string, unknown>;
