import { object, string } from 'yup'

export const initialValuesConfirmSignUpForm = {
  code: '',
}

export const schemaConfirmSignUpForm = object().shape({
  code: string().required(),
})
