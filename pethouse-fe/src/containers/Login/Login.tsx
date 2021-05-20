import { Auth } from 'aws-amplify'
import { Box, Center } from '@chakra-ui/react'
import { LoginForm } from 'components/LoginForm'
import { FormikHelpers } from 'formik'
import { memo, useCallback } from 'react'
import { ILogInSchema } from 'typescript/interface/auth'
import { ANIMALS_PATH } from 'constants/routes'
import { useLocalization } from 'hooks/useLocalization'
import { useHistory } from 'react-router-dom'

const LoginContainer = () => {
  const intl = useLocalization()
  const { push } = useHistory()

  const onSubmit = useCallback(
    async (formValues: ILogInSchema, formContext: FormikHelpers<ILogInSchema>) => {
      try {
        const logInResponse = await Auth.signIn(formValues.email, formValues.password)
        console.log(logInResponse)
        if (logInResponse) {
          push(ANIMALS_PATH)
        }
      } catch (err) {
        console.log(err)
        if (err.code === 'NotAuthorizedException') {
          formContext.setFieldError('email', intl('incorrectCreds'))
        }
      }
    },
    [Auth, push],
  )

  return (
    <Center minH="100vh" p="2em">
      <Box w="30em" maxW="90%" bg="white" borderRadius="0.5em" p="2em">
        <LoginForm onSubmit={onSubmit} />
      </Box>
    </Center>
  )
}

export default memo(LoginContainer)
