import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { buildJsonSchema } from './build-json-schema';
import { ValerosConfigSchema } from './valeros-config.schema';

const ROOT = resolve(import.meta.dirname, '../../../..');

describe('valeros.config.schema.json', () => {
  it('is in sync with the Zod schema — run `npm run generate:config-schema` to fix', () => {
    const currentJsonSchema = readFileSync(
      resolve(ROOT, 'public/config/valeros.config.schema.json'),
      'utf-8',
    );

    expect(buildJsonSchema(ValerosConfigSchema)).toBe(currentJsonSchema);
  });
});

describe('valeros.config.json', () => {
  it('is valid against the Zod schema', () => {
    const raw = JSON.parse(
      readFileSync(resolve(ROOT, 'public/config/valeros.config.json'), 'utf-8'),
    );

    const result = ValerosConfigSchema.safeParse(raw);

    if (!result.success) {
      expect(result.error.issues).toEqual([]);
    } else {
      expect(result.success).toBe(true);
    }
  });
});
