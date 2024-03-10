// A basic graphQL client to collect to the Hashnode's GraphQL APIs.

import { GraphQLClient } from "graphql-request";

export const getClient = (token = null) => {
  const client = new GraphQLClient(`https://gql.hashnode.com`);

  if (token) {
    client.setHeader("Authorization", `Bearer ${token}`);
  }
  return client;
};
