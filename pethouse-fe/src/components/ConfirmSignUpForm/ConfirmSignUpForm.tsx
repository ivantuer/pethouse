import { Button, Text } from '@chakra-ui/react'
import withLocalization, { IWithLocalization } from 'hocs/withLocalization'
import { FC, memo, useCallback } from 'react'
import { TextInput } from 'UI/TextInput'
import { FormikHelpers, useFormik } from 'formik'
import { Link, useHistory } from 'react-router-dom'
import { SIGN_UP_PATH } from 'constants/routes'
import { useLocalization } from 'hooks/useLocalization'
import { IConfirmSignUpSchema } from 'typescript/interface/auth'
import { initialValuesConfirmSignUpForm, schemaConfirmSignUpForm } from './schema'

interface IConfirmSignUpFormProps {
  onSubmit: (formValues: IConfirmSignUpSchema, formContext: FormikHelpers<IConfirmSignUpSchema>) => void
}

const ConfirmSignUpForm: FC<IConfirmSignUpFormProps> = ({ onSubmit }) => {
  const intl = useLocalization()
  const { push } = useHistory()
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValuesConfirmSignUpForm,
    validationSchema: schemaConfirmSignUpForm,
    onSubmit: onSubmit,
  })

  const handleBack = useCallback(() => {
    push(SIGN_UP_PATH)
  }, [push])

  return (
    <form onSubmit={handleSubmit}>
      <Text mb="1em" fontSize="4xl">
        {intl('emailConfirm')}
      </Text>
      <TextInput name="code" value={values.code} onChange={handleChange} error={touched.code ? errors.code : ''} label={intl('code')} />

      <Button type="submit" mt="2em" colorScheme="teal" isFullWidth>
        {intl('confirm')}
      </Button>
      <Link to={SIGN_UP_PATH}>
        <Button onClick={handleBack} mt="1em" variant="outline" colorScheme="teal" isFullWidth>
          {intl('back')}
        </Button>
      </Link>
    </form>
  )
}

export default memo(ConfirmSignUpForm)
