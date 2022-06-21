import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ljcdt56mom01yrdswgf7n9/master?query=query%20%7B%0A%20%20lessons%20%7B%0A%09%09id%0A%20%20%20%20title%0A%20%20%7D%0A%7D',
  cache: new InMemoryCache()
})