import { createSchema, createYoga } from "graphql-yoga";
import { schema } from "../../../server/graphql/schema";
import { typeDefs } from "../../../server/graphql/schema";
import { resolvers } from "../../../server/graphql/resolver";

const { handleRequest } = createYoga({
  // schema: schema,
  schema: createSchema({
    typeDefs,
    resolvers,
  }),

  // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
  graphqlEndpoint: "/api/graphql",

  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response },
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
