import { object, string, number, boolean } from 'yup'
import { IUpdateShelterSchema } from '../../typescript/interface/shelter'

export const initialValuesUpdateShelterForm: IUpdateShelterSchema = {
  title: '',
  address: '',
  phone: '',
  email: '',
}

export const schemaUpdateShelterForm = object().shape({
  title: string().trim().required(),
  address: string().trim().required(),
  phone: string().trim(),
  email: string().trim(),
})
