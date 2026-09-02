import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as z from 'zod';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const { ValerosConfigSchema } = await import(
  resolve(ROOT, 'src/app/config/schema/valeros-config.schema.ts')
);

const schema = z.toJSONSchema(ValerosConfigSchema, {
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

const schemaPath = resolve(ROOT, 'public/config/valeros.config.schema.json');
writeFileSync(schemaPath, JSON.stringify(output, null, 2) + '\n');
console.log('Schema written to', schemaPath);
