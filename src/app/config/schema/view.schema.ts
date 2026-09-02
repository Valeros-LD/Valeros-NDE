import * as z from 'zod';
import { IconKeySchema } from './icon.schema';
import { NodePresentationConfigSchema } from './widget.schema';

export const ViewComponentKeySchema = z
  .enum(['list-view', 'grid-view', 'map-view', 'timeline-view'])
  .meta({ id: 'viewComponentKey' });

export const ViewTypeSchema = z
  .enum(['list', 'grid', 'map', 'timeline'])
  .meta({ id: 'viewType' });

export const BaseViewOptionsSchema = z.object({
  pageSize: z.number().optional(),
  showPagination: z.boolean().optional(),
  showResultsCount: z.boolean().optional(),
  showSort: z.boolean().optional(),
  hidden: z.boolean().optional(),
  defaultSort: z.string().optional(),
});

export const ViewOptionsSchema = BaseViewOptionsSchema.loose();

export const ViewDefinitionSchema = z.object({
  type: ViewTypeSchema,
  componentId: ViewComponentKeySchema,
  icon: IconKeySchema,
  label: z.string(),
  options: ViewOptionsSchema,
  presentationConfig: NodePresentationConfigSchema,
});

export const ViewsConfigSchema = z.object({
  views: z.array(ViewDefinitionSchema),
  defaultView: ViewTypeSchema,
});

export type ViewComponentKey = z.infer<typeof ViewComponentKeySchema>;
export type ViewType = z.infer<typeof ViewTypeSchema>;
export type BaseViewOptions = z.infer<typeof BaseViewOptionsSchema>;
export type ViewOptions = z.infer<typeof ViewOptionsSchema>;
export type ViewDefinition = z.infer<typeof ViewDefinitionSchema>;
export type ViewsConfig = z.infer<typeof ViewsConfigSchema>;
