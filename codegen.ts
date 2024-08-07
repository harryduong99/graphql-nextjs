import type { CodegenConfig } from "@graphql-codegen/cli";
import { schema } from "./src/server/graphql/schema";
import { printSchema } from "graphql";

const config: CodegenConfig = {
  schema: printSchema(schema), // available format: URL, JSON, code file (.ts), JS export (.js), String, Git...
  documents: ["src/**/*.graphql"],
  generates: {
    "./src/client/gql/": {
      preset: "client",
    },
  },
};
export default config;
