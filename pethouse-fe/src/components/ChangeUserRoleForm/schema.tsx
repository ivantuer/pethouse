import { object, string } from 'yup'

export const initialValuesChangeUserRoleForm = {
  role: undefined,
}

export const schemaChangeUserRoleForm = object().shape({
  role: string().required(),
})
