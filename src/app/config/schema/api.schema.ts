import * as z from 'zod';

export const ApiConfigSchema = z.object({
  baseUrl: z.string(),
});

export type ApiConfig = z.infer<typeof ApiConfigSchema>;
