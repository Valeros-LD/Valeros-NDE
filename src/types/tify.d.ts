declare module 'tify' {
  // TODO: Expand this type
  export interface TifyOptions {
    container: string;
    manifestUrl: string;
    view: 'export' | 'help' | 'info' | 'text' | 'thumbnails' | 'toc' | null;
  }

  export default class Tify {
    constructor(options: TifyOptions);
    destroy(): void;
  }
}
