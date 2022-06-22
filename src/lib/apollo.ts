import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4omyz4x0kbz01xkgx9396gn/master',
  cache: new InMemoryCache()
})