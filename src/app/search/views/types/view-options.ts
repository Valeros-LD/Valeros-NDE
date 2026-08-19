export interface BaseViewOptions {
  pageSize?: number;
  showPagination?: boolean;
  showResultsCount?: boolean;
  showSort?: boolean;
  hidden?: boolean;
  defaultSort?: string;
}

export type ViewOptions = BaseViewOptions & Record<string, unknown>;
