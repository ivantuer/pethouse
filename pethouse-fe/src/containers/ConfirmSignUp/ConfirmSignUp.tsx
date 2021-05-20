import { Auth } from 'aws-amplify'
import { Box, Center } from '@chakra-ui/react'
import { ANIMALS_PATH, SIGN_UP_PATH } from 'constants/routes'
import { FormikHelpers } from 'formik'
import { memo, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { IConfirmSignUpSchema } from 'typescript/interface/auth'
import { useLocalization } from 'hooks/useLocalization'
import { useCreateUserMutation } from 'generated/graphql'
import { ConfirmSignUpForm } from '../../components/ConfirmSignUpForm'

const ConfirmSignUpContainer = () => {
  const { push } = useHistory()
  const intl = useLocalization()
  useEffect(() => {
    if (!localStorage.getItem('temporaryEmailStorage')) {
      push(SIGN_UP_PATH)
    }
  }, [])
  const [createUserMutation] = useCreateUserMutation({
    onCompleted() {
      push(ANIMALS_PATH)
    },
  })

  const onSubmit = useCallback(
    async (formValues: IConfirmSignUpSchema, formContext: FormikHelpers<IConfirmSignUpSchema>) => {
      const confirmSignUpResponse = await Auth.confirmSignUp(localStorage.getItem('temporaryEmailStorage') || '', formValues.code)
      // if (confirmSignUpResponse !== 'SUCCESS') {
      //   push(SIGN_UP_PATH)
      // } else {
      //   formContext.setFieldError('code', intl('invalidCode'))
      // }

      console.log(confirmSignUpResponse)

      if (localStorage.getItem('temporaryEmailStorage') && localStorage.getItem('temporaryPassStorage')) {
        const signInResponse = await Auth.signIn(
          localStorage.getItem('temporaryEmailStorage') || '',
          localStorage.getItem('temporaryPassStorage') || '',
        )
        if (signInResponse) {
          const { attributes } = signInResponse
          createUserMutation({
            variables: {
              createUserInput: {
                id: attributes.sub,
                lastName: attributes.family_name,
                firstName: attributes.given_name,
                email: attributes.email,
              },
            },
          })

          // createUserMutation()
          // push(ANIMALS_PATH)
        }
      }
    },
    [Auth, push, intl],
  )
  return (
    <Center minH="100vh" p="2em">
      <Box w="30em" maxW="90%" bg="white" borderRadius="0.5em" p="2em">
        <ConfirmSignUpForm onSubmit={onSubmit} />
      </Box>
    </Center>
  )
}

export default memo(ConfirmSignUpContainer)
