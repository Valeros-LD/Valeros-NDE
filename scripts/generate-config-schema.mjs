import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const { ValerosConfigSchema } = await import(
  resolve(ROOT, 'src/app/config/schema/valeros-config.schema.ts')
);
const { buildJsonSchema } = await import(
  resolve(ROOT, 'src/app/config/schema/validation/build-json-schema.ts')
);

const schemaPath = resolve(ROOT, 'public/config/valeros.config.schema.json');
writeFileSync(schemaPath, buildJsonSchema(ValerosConfigSchema));
console.log('Schema written to', schemaPath);
