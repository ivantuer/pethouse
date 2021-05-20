import { Button, Text } from '@chakra-ui/react'
import withLocalization, { IWithLocalization } from 'hocs/withLocalization'
import { FC, memo, ReactNode } from 'react'
import { TextInput } from 'UI/TextInput'

import { FormikHelpers, useFormik } from 'formik'

import { LOGIN_PATH } from 'constants/routes'

import { Link } from 'react-router-dom'
import { useLocalization } from 'hooks/useLocalization'
import { ISignUpSchema } from 'typescript/interface/auth'
import { initialValuesSignUpForm, schemaSignUpForm } from './schema'

interface ISignUpFormProps {
  onSubmit: (formValues: ISignUpSchema, formContext: FormikHelpers<ISignUpSchema>) => void
}

const SignUpForm: FC<ISignUpFormProps> = ({ onSubmit }) => {
  const { errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValuesSignUpForm,
    validationSchema: schemaSignUpForm,
    onSubmit: onSubmit,
  })
  const intl = useLocalization()

  return (
    <form onSubmit={handleSubmit}>
      <Text mb="1em" fontSize="4xl">
        {intl('signUpTitle')}
      </Text>
      <TextInput name="email" onChange={handleChange} error={touched.email ? errors.email : ''} label={intl('email')} />
      <TextInput
        name="firstName"
        onChange={handleChange}
        error={touched.firstName ? errors.firstName : ''}
        FormControlProps={{ mt: '1em' }}
        label={intl('firstName')}
      />
      <TextInput
        name="lastName"
        onChange={handleChange}
        error={touched.lastName ? errors.lastName : ''}
        FormControlProps={{ mt: '1em' }}
        label={intl('lastName')}
      />
      <TextInput
        name="password"
        onChange={handleChange}
        error={touched.password ? errors.password : ''}
        FormControlProps={{ mt: '1em' }}
        label={intl('password')}
      />
      <TextInput
        name="passwordConfirm"
        onChange={handleChange}
        error={touched.passwordConfirm ? errors.passwordConfirm : ''}
        FormControlProps={{ mt: '1em' }}
        label={intl('passwordConfirm')}
      />
      <Button type="submit" mt="2em" colorScheme="teal" isFullWidth>
        {intl('signUp')}
      </Button>
      <Link to={LOGIN_PATH}>
        <Button mt="1em" colorScheme="teal" variant="outline" isFullWidth>
          {intl('login')}
        </Button>
      </Link>
    </form>
  )
}

export default memo(SignUpForm)
