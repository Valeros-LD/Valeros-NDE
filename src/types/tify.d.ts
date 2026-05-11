declare module 'tify' {
  // TODO: Expand this type
  export interface TifyOptions {
    container: string;
    manifestUrl: string;
  }

  export default class Tify {
    constructor(options: TifyOptions);
    destroy(): void;
  }
}
