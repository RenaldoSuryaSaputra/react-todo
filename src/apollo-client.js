import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://equipped-oriole-99.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "sNtefWaq9HC51UQHwJpKTRFnDHl69vyRGyBya9J05ZP1ccawegcAvWUgaag04k5s",
  },
});

export default client;
