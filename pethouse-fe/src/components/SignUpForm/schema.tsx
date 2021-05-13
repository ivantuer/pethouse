import { object, string } from 'yup'

export const initialValuesSignUpForm = {
  email: '',
  password: '',
  passwordConfirm: '',
  firstName: '',
  lastName: '',
}

export const schemaSignUpForm = object().shape({
  email: string().email().trim().required(),
  firstName: string().trim().required(),
  lastName: string().trim().required(),
  password: string().min(8).trim().required(),
  passwordConfirm: string().min(8).trim().required(),
})
