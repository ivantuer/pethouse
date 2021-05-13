import { ChakraProvider } from '@chakra-ui/react'
import { Main } from 'components/Main'
import { Router } from 'react-router-dom'

import history from '@history'
import theme from 'theme'
import MainContextProvider from 'contexts/main/mainContextProvider'
import { LocalizationProvider } from 'containers/Localization'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <MainContextProvider>
        <LocalizationProvider>
          <Router history={history}>
            <Main />
          </Router>
        </LocalizationProvider>
      </MainContextProvider>
    </ChakraProvider>
  )
}

export default App
