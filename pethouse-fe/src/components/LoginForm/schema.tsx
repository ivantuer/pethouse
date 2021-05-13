import { object, string } from 'yup'

export const initialValuesLoginForm = {
  email: '',
  password: '',
}

export const schemaLoginForm = object().shape({
  email: string().email().required(),
  password: string().min(8).required(),
})
