import { Box, Button } from '@chakra-ui/react'
import { FC, memo } from 'react'
import { Select } from 'UI/TextInput'
import { FormikHelpers, useFormik } from 'formik'
import { useLocalization } from 'hooks/useLocalization'
import { IUpdateUserRoleFormSchema, IUpdateUserRoleSchema } from 'typescript/interface/user'
import { UserRoleEnum } from 'generated/graphql'
import { initialValuesChangeUserRoleForm, schemaChangeUserRoleForm } from './schema'

interface IChangeUserRoleFormProps {
  onSubmit: (formValues: IUpdateUserRoleFormSchema, formContext: FormikHelpers<IUpdateUserRoleFormSchema>) => void
  loading: boolean
  onCancel: () => void
  initialValues?: IUpdateUserRoleSchema
}

const ChangeUserRoleForm: FC<IChangeUserRoleFormProps> = ({ initialValues, onSubmit, loading, onCancel }) => {
  const intl = useLocalization()
  const { values, errors, touched, handleChange, handleSubmit } = useFormik<IUpdateUserRoleFormSchema>({
    initialValues: { ...initialValuesChangeUserRoleForm, ...initialValues },
    validationSchema: schemaChangeUserRoleForm,
    onSubmit: onSubmit,
  })

  return (
    <form onSubmit={handleSubmit}>
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
          {intl('changeRole')}
        </Button>
        <Button isDisabled={loading} onClick={onCancel} colorScheme="teal" variant="outline">
          {intl('back')}
        </Button>
      </Box>
    </form>
  )
}

export default memo(ChangeUserRoleForm)
