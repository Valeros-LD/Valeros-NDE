import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as z from 'zod';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const { ValerosConfigSchema } = await import(
  resolve(ROOT, 'src/app/config/valeros-config.schema.ts')
);

const schema = z.toJSONSchema(ValerosConfigSchema, {
  target: 'draft-2020-12',
  reused: 'inline',
});

schema.$schema = 'https://json-schema.org/draft/2020-12/schema';
schema.$id = 'https://valeros.nl/config/valeros.config.schema.json';
schema.title = 'ValerosConfig';

const schemaPath = resolve(ROOT, 'public/config/valeros.config.schema.json');
writeFileSync(schemaPath, JSON.stringify(schema, null, 2) + '\n');
console.log('Schema written to', schemaPath);
