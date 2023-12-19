// A basic graphQL client to collect to the Hashnode's GraphQL APIs.

import { GraphQLClient } from "graphql-request";

export const getClient = () => {
  const client = new GraphQLClient(`https://gql.hashnode.com`);
  return client;
}