import { Box, Center } from '@chakra-ui/react'
import { SignUpForm } from 'components/SignUpForm'
import { memo, useCallback } from 'react'
import { Auth } from 'aws-amplify'
import { ISignUpSchema } from 'typescript/interface/auth'
import { FormikHelpers } from 'formik'
import { useHistory } from 'react-router-dom'
import { CONFIRM_SIGN_UP_PATH } from 'constants/routes'
import { useLocalization } from 'hooks/useLocalization'

const SignUpContainer = () => {
  const intl = useLocalization()
  const { push } = useHistory()
  const onSubmit = useCallback(async (formValues: ISignUpSchema, formContext: FormikHelpers<ISignUpSchema>) => {
    try {
      const signUpResponse = await Auth.signUp({
        username: formValues.email,
        password: formValues.password,
        attributes: {
          email: formValues.email,
          family_name: formValues.lastName,
          given_name: formValues.firstName,
        },
      })

      if (signUpResponse) {
        localStorage.setItem('temporaryPassStorage', formValues.password)
        localStorage.setItem('temporaryEmailStorage', formValues.email)
        push(CONFIRM_SIGN_UP_PATH)
      }
    } catch (err) {
      if (err.code === 'UsernameExistsException') {
        formContext.setFieldError('email', intl('emailTaken'))
      }
    }
  }, [])
  return (
    <Center minH="100vh" p="2em">
      <Box w="30em" maxW="90%" bg="white" borderRadius="0.5em" p="2em">
        <SignUpForm onSubmit={onSubmit} />
      </Box>
    </Center>
  )
}

export default memo(SignUpContainer)
