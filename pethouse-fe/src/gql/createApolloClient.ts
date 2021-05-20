import { ApolloCache, ApolloClient, HttpLink, InMemoryCache, concat, NormalizedCacheObject } from '@apollo/client'
// eslint-disable-next-line
import { setContext } from '@apollo/client/link/context'
import { Auth } from 'aws-amplify'

export const createApolloClient = (isServer: boolean) => {
  const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL })

  const authLink = setContext(async (_, { headers }) => {
    let token = null || ''

    try {
      token = await (await Auth.currentSession()).getIdToken().getJwtToken()
      return {
        headers: {
          ...Headers,
          Authorization: token,
        },
      }
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.warn(error)
    }
    return { headers }
  })

  const cache = new InMemoryCache({}).restore(!isServer ? (window as any).__APOLLO_STATE__ : {}) as ApolloCache<NormalizedCacheObject>

  const client = new ApolloClient<NormalizedCacheObject>({
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first',
      },
    },
    link: concat(authLink, httpLink),
    ssrMode: isServer,
    ssrForceFetchDelay: isServer ? 100 : undefined,
  })

  return client
}
