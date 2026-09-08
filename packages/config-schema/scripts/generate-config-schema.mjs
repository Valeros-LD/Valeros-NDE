import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const PACKAGE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const WORKSPACE_ROOT = resolve(PACKAGE_ROOT, '../..');

const { ValerosConfigSchema } = await import(
  resolve(PACKAGE_ROOT, 'src/valeros-config.schema.ts')
);
const { buildJsonSchema } = await import(
  resolve(PACKAGE_ROOT, 'src/build-json-schema.ts')
);

const schemaPath = resolve(
  WORKSPACE_ROOT,
  'apps/valeros/public/config/valeros.config.schema.json',
);
writeFileSync(schemaPath, buildJsonSchema(ValerosConfigSchema));
console.log('Schema written to', schemaPath);
