import * as z from 'zod';
import { ApiConfigSchema } from './api.schema';
import { FacetConfigSchema } from './facet.schema';
import { ViewsConfigSchema } from './view.schema';
import { NodePresentationConfigSchema } from './widget.schema';

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
