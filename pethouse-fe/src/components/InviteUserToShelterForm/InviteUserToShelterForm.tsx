import { Box, Button } from '@chakra-ui/react'
import { FC, memo } from 'react'
import { Select } from 'UI/TextInput'
import { FormikHelpers, useFormik } from 'formik'
import { useLocalization } from 'hooks/useLocalization'
import { IInviteToShelterFormSchema } from 'typescript/interface/user'
import { UserRoleEnum, FindUserQuery } from 'generated/graphql'
import { initialValuesInviteUserToShelterForm, schemaInviteUserToShelterForm } from './schema'

interface IInviteUserToShelterFormProps {
  onSubmit: (formValues: IInviteToShelterFormSchema, formContext: FormikHelpers<IInviteToShelterFormSchema>) => void
  loading: boolean
  onCancel: () => void
  users: FindUserQuery['findUser']
}

const InviteUserToShelterForm: FC<IInviteUserToShelterFormProps> = ({ users, onSubmit, loading, onCancel }) => {
  const intl = useLocalization()
  const { values, errors, touched, handleChange, handleSubmit } = useFormik<IInviteToShelterFormSchema>({
    initialValues: initialValuesInviteUserToShelterForm,
    validationSchema: schemaInviteUserToShelterForm,
    onSubmit: onSubmit,
  })

  return (
    <form onSubmit={handleSubmit}>
      <Select
        FormControlProps={{ mb: '1em' }}
        label={intl('user')}
        name="id"
        value={values.id}
        error={touched.id ? errors.id : ''}
        onChange={handleChange}
        options={users.map((user) => ({ value: user.id, name: `${user.firstName} ${user.lastName}` }))}
      />

      <Select
        FormControlProps={{ mb: '1em' }}
        label={intl('role')}
        name="role"
        value={values.role}
        error={touched.role ? errors.role : ''}
        onChange={handleChange}
        options={[
          { value: UserRoleEnum.ShelterWorker, name: UserRoleEnum.ShelterWorker },
          { value: UserRoleEnum.ShelterAdmin, name: UserRoleEnum.ShelterAdmin },
        ]}
      />

      <Box display="flex" mt="2em" justifyContent="flex-end">
        <Button isLoading={loading} type="submit" mr="2em" colorScheme="teal">
          {intl('invite')}
        </Button>
        <Button isDisabled={loading} onClick={onCancel} colorScheme="teal" variant="outline">
          {intl('back')}
        </Button>
      </Box>
    </form>
  )
}

export default memo(InviteUserToShelterForm)
