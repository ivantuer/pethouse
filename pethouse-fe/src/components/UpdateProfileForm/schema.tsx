import { object, string, number, boolean } from 'yup'
import { IUpdateProfileSchema } from '../../typescript/interface/user'

export const initialValuesUpdateProfileForm: IUpdateProfileSchema = {
  firstName: '',
  lastName: '',
  phone: '',
  jobPosition: '',
}

export const schemaUpdateProfileForm = object().shape({
  firstName: string().trim().required(),
  lastName: string().trim().required(),
  phone: string().trim(),
  jobPosition: string().trim(),
})
