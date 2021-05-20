import { ChakraProvider } from '@chakra-ui/react'
import { Main } from 'components/Main'
import { Router } from 'react-router-dom'

import history from '@history'
import theme from 'theme'
import MainContextProvider from 'contexts/main/mainContextProvider'
import { LocalizationProvider } from 'containers/Localization'
import Amplify from 'aws-amplify'
import { ApolloProvider } from '@apollo/client'
import { createApolloClient } from 'gql/createApolloClient'

const { REACT_APP_USER_CLIENT_ID, REACT_APP_USER_POOL_ID, REACT_APP_REGION } = process.env

Amplify.configure({
  Auth: {
    // oauth: {
    //   domain: REACT_APP_OAUTH_DOMAIN,
    //   scope: ["email", "openid", "profile"],
    //   redirectSignIn: REACT_APP_REDIRECT_SIGN_IN,
    //   redirectSignOut: REACT_APP_REDIRECT_SIGN_OUT,
    //   responseType: "code",
    // },
    // identityPoolId: REACT_APP_IDENTITY_POOL_ID,
    region: REACT_APP_REGION,
    userPoolId: REACT_APP_USER_POOL_ID,
    userPoolWebClientId: REACT_APP_USER_CLIENT_ID,
  },
  // Storage: {
  //   AWSS3: {
  //     bucket: REACT_APP_S3_BUCKET,
  //     region: REACT_APP_REGION,
  //     customPrefix: {
  //       public: 'public/temp/',
  //     },
  //   },
  // },
})

const apolloClient = createApolloClient(false)

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <MainContextProvider>
          <LocalizationProvider>
            <Router history={history}>
              <Main />
            </Router>
          </LocalizationProvider>
        </MainContextProvider>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
