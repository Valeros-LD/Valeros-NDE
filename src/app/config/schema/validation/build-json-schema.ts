import * as z from 'zod';

export function buildJsonSchema(rootSchema: z.ZodType): string {
  const schema = z.toJSONSchema(rootSchema, {
    target: 'draft-2020-12',
    reused: 'inline',
  });

  const output = {
    $comment:
      'Auto-generated — do not edit directly. Run `npm run generate:config-schema` to regenerate from src/app/config/schema/valeros-config.schema.ts.',
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: 'https://valeros.nl/config/valeros.config.schema.json',
    title: 'ValerosConfig',
    ...schema,
  };

  return JSON.stringify(output, null, 2) + '\n';
}
