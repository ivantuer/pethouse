import React, { memo } from 'react'
import { Route, Switch } from 'react-router-dom'

import { AnimalPage, AnimalsPage, LoginPage, ProfilePage, ShelterPage, SignUpPage, ConfirmSignUpPage, AnimalInShelterPage } from 'pages'
import { Box } from '@chakra-ui/react'
import {
  ANIMALS_PATH,
  ANIMAL_PATH,
  CONFIRM_SIGN_UP_PATH,
  LOGIN_PATH,
  PROFILE_PATH,
  SHELTER_ANIMAL_PATH,
  SHELTER_PATH,
  SHELTER_USERS_PATH,
  SIGN_UP_PATH,
} from 'constants/routes'
import ShelterUsersPage from 'pages/ShelterUsers'

const Main = () => {
  return (
    <Box bg="gray.100">
      <Switch>
        <Route path={CONFIRM_SIGN_UP_PATH} exact component={ConfirmSignUpPage} />
        <Route path={LOGIN_PATH} exact component={LoginPage} />
        <Route path={SIGN_UP_PATH} exact component={SignUpPage} />
        <Route path={ANIMALS_PATH} exact component={AnimalsPage} />
        <Route path={ANIMAL_PATH} exact component={AnimalPage} />
        <Route path={PROFILE_PATH} exact component={ProfilePage} />
        <Route path={SHELTER_ANIMAL_PATH} exact component={AnimalInShelterPage} />
        <Route path={SHELTER_PATH} exact component={ShelterPage} />
        <Route path={SHELTER_USERS_PATH} exact component={ShelterUsersPage} />

        <Route component={AnimalsPage} />
      </Switch>
    </Box>
  )
}

export default memo(Main)
