import * as z from 'zod';
import { IconKeySchema } from './icon.schema';

export const FacetConfigSchema = z.object({
  name: z.string(),
  label: z.string(),
  icon: IconKeySchema.optional(),
  hidden: z.boolean().optional(),
});

export type FacetConfig = z.infer<typeof FacetConfigSchema>;
