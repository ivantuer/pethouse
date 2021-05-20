import { IInviteToShelterFormSchema } from 'typescript/interface/user'
import { object, string } from 'yup'

export const initialValuesInviteUserToShelterForm: IInviteToShelterFormSchema = {
  id: undefined,
  role: undefined,
}

export const schemaInviteUserToShelterForm = object().shape({
  id: string().required(),
  role: string().required(),
})
