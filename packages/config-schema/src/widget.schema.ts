import * as z from 'zod';
import { IconKeySchema } from './icon.schema';

export const WidgetComponentKeySchema = z
  .enum([
    'text-widget',
    'link-widget',
    'literal-link-widget',
    'json-widget',
    'image-gallery-widget',
    'map-widget',
    'media-widget',
    'dataset-widget',
    'creator-widget',
    'address-widget',
    'date-widget',
    'referring-nodes-widget',
    'separator-widget',
  ])
  .meta({ id: 'widgetComponentKey' });

export const WidgetPositionSchema = z
  .enum(['top', 'left', 'main', 'right', 'bottom'])
  .meta({ id: 'widgetPosition' });

export const BaseWidgetOptionsSchema = z.object({
  showPropertyLabel: z.boolean().optional(),
  propertyLabel: z.string().optional(),
  propertyPath: z.string().optional(),
  icon: IconKeySchema.optional(),
  position: WidgetPositionSchema.optional(),
  noPadding: z.boolean().optional(),
  showOriginalLink: z.boolean().optional(),
});

export const WidgetOptionsSchema = BaseWidgetOptionsSchema.loose();

export const WidgetSchema = z.object({
  id: z.string(),
  componentId: WidgetComponentKeySchema,
  properties: z.array(z.string()).optional(),
  options: WidgetOptionsSchema.optional(),
  isFallback: z.boolean().optional(),
  hidden: z.boolean().optional(),
});

export const NodePresentationConfigSchema = z
  .object({
    widgets: z.array(WidgetSchema),
    showArrowIndicator: z.boolean().optional(),
  })
  .meta({ id: 'nodePresentationConfig' });

export type WidgetComponentKey = z.infer<typeof WidgetComponentKeySchema>;
export type WidgetPosition = z.infer<typeof WidgetPositionSchema>;
export type BaseWidgetOptions = z.infer<typeof BaseWidgetOptionsSchema>;
export type WidgetOptions = z.infer<typeof WidgetOptionsSchema>;
export type Widget = z.infer<typeof WidgetSchema>;
export type NodePresentationConfig = z.infer<
  typeof NodePresentationConfigSchema
>;
