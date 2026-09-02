import * as z from 'zod';
import {
  ApiConfigSchema,
  FacetConfigSchema,
  NodePresentationConfigSchema,
  ViewsConfigSchema,
} from './index';

export * from './index';

export const ValerosConfigSchema = z
  .object({
    $schema: z.string().optional(),
    api: ApiConfigSchema,
    facets: z.array(FacetConfigSchema),
    views: ViewsConfigSchema,
    presentation: z.object({
      imagePaths: z.array(z.string()),
      details: NodePresentationConfigSchema,
    }),
  })
  .strict();

export type ValerosConfig = z.infer<typeof ValerosConfigSchema>;
