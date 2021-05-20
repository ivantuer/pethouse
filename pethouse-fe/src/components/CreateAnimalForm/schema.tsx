import { object, string, number, boolean } from 'yup'
import { CreateAnimalInput } from 'generated/graphql'
import { ICreateAnimalSchema } from 'typescript/interface/animal'

export const initialValuesCreateAnimalForm: ICreateAnimalSchema = {
  shelter: '',
  name: '',
  age: undefined,
  status: undefined,
  isSterilized: false,
  gender: undefined,
  weight: undefined,
  height: undefined,
  color: undefined,
  description: '',
  imageUrl: '',
  type: undefined,
}

export const schemaCreateAnimalForm = object().shape({
  shelter: string(),
  name: string().required(),
  age: number().min(0).integer(),
  status: string().nullable(),
  isSterilized: boolean(),
  gender: string().nullable(),
  weight: number().min(0),
  height: number().min(0),
  color: string().nullable(),
  description: string(),
  type: string().nullable(),
})
