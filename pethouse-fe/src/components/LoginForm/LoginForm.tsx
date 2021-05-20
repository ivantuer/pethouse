import { Button, Text } from '@chakra-ui/react'
import { FC, memo } from 'react'
import { TextInput } from 'UI/TextInput'
import { FormikHelpers, useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { SIGN_UP_PATH } from 'constants/routes'
import { ILogInSchema } from 'typescript/interface/auth'
import { useLocalization } from 'hooks/useLocalization'
import { initialValuesLoginForm, schemaLoginForm } from './schema'

interface ILogInFormProps {
  onSubmit: (formValues: ILogInSchema, formContext: FormikHelpers<ILogInSchema>) => void
}

const LoginForm: FC<ILogInFormProps> = ({ onSubmit }) => {
  const intl = useLocalization()
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValuesLoginForm,
    validationSchema: schemaLoginForm,
    onSubmit: onSubmit,
  })

  return (
    <form onSubmit={handleSubmit}>
      <Text mb="1em" fontSize="4xl">
        {intl('loginTitle')}
      </Text>
      <TextInput name="email" value={values.email} onChange={handleChange} error={touched.email ? errors.email : ''} label={intl('email')} />
      <TextInput
        name="password"
        onChange={handleChange}
        value={values.password}
        error={touched.password ? errors.password : ''}
        FormControlProps={{ mt: '1em' }}
        label={intl('password')}
      />
      <Button type="submit" mt="2em" colorScheme="teal" isFullWidth>
        {intl('login')}
      </Button>
      <Link to={SIGN_UP_PATH}>
        <Button mt="1em" variant="outline" colorScheme="teal" isFullWidth>
          {intl('signUp')}
        </Button>
      </Link>
    </form>
  )
}

export default memo(LoginForm)
