import React, { memo } from 'react'
import { Route, Switch } from 'react-router-dom'

import { AnimalPage, AnimalsPage, LoginPage, SignUpPage } from 'pages'
import { Box } from '@chakra-ui/react'
import { ANIMALS_PATH, ANIMAL_PATH, LOGIN_PATH, SIGN_UP_PATH } from 'constants/routes'

const Main = () => {
  return (
    <Box bg="gray.100">
      <Switch>
        <Route path={LOGIN_PATH} exact component={LoginPage} />
        <Route path={SIGN_UP_PATH} exact component={SignUpPage} />
        <Route path={ANIMALS_PATH} exact component={AnimalsPage} />
        <Route path={ANIMAL_PATH} exact component={AnimalPage} />

        <Route component={AnimalsPage} />
      </Switch>
    </Box>
  )
}

export default memo(Main)
