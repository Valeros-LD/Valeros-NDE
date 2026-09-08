import { ValerosConfigSchema } from '@valeros/config-schema';

const _schemaShape = ValerosConfigSchema.shape;
console.log('Schema keys:', Object.keys(_schemaShape));
