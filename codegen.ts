import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://localhost:3000/api/graphql",
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/client/gql/": {
      preset: "client",
    },
  },
};
export default config;
