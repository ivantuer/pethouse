import { UserRoleEnum } from 'generated/graphql'

export interface IUpdateProfileSchema {
  firstName?: string
  lastName?: string
  phone?: string
  jobPosition?: string
  email?: string
}

export interface IUpdateUserRoleSchema {
  firstName?: string
  lastName?: string
  id?: string
  role?: UserRoleEnum
}

export interface IUpdateUserRoleFormSchema {
  role?: UserRoleEnum
}

export interface IInviteToShelterFormSchema {
  role?: UserRoleEnum
  id?: string
}
