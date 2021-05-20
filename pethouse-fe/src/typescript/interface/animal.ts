import { AnimalColorEnum, AnimalGenderEnum, AnimalStatusEnum, AnimalTypeEnum } from 'generated/graphql'

export interface ICreateAnimalSchema {
  shelter?: string
  id?: string
  name?: string
  age?: number
  status?: AnimalStatusEnum
  isSterilized?: boolean
  gender?: AnimalGenderEnum
  weight?: number
  height?: number
  color?: AnimalColorEnum
  description?: string
  imageUrl?: string
  type?: AnimalTypeEnum
}
