import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  documents: ['src/app/api/graphql/**/*.graphql'],
  generates: {
    'src/app/api/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      config: {
        skipTypename: false,
        avoidOptionals: false,
      },
    },
  },
};

export default config;
