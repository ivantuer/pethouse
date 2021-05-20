import { Box, Button, Checkbox, Grid, GridItem } from '@chakra-ui/react'
import { FC, memo } from 'react'
import { Select, TextInput } from 'UI/TextInput'

import { FormikHelpers, useFormik } from 'formik'

import { useLocalization } from 'hooks/useLocalization'
import { MeQuery } from 'generated/graphql'
import { initialValuesUpdateShelterForm, schemaUpdateShelterForm } from './schema'
import { IUpdateShelterSchema } from '../../typescript/interface/shelter'

interface IUpdateShelterFormProps {
  onSubmit: (formValues: IUpdateShelterSchema, formContext: FormikHelpers<IUpdateShelterSchema>) => void
  loading: boolean
  initialValues: IUpdateShelterSchema
  formDisabled?: boolean
}

const UpdateShelterForm: FC<IUpdateShelterFormProps> = ({ onSubmit, loading, initialValues, formDisabled }) => {
  const { errors, touched, handleChange, handleSubmit, values } = useFormik<IUpdateShelterSchema>({
    initialValues: { ...initialValuesUpdateShelterForm, ...initialValues },
    validationSchema: schemaUpdateShelterForm,
    onSubmit: onSubmit,
    enableReinitialize: true,
  })
  const intl = useLocalization()

  return (
    <form onSubmit={handleSubmit}>
      <Grid gap={['1em', '1em', '2em']} templateColumns="repeat(2, 1fr)">
        <GridItem colSpan={[2, 2, 1, 1]}>
          <TextInput
            isDisabled={formDisabled}
            name="title"
            onChange={handleChange}
            value={values.title}
            error={touched.title ? errors.title : ''}
            label={intl('title')}
          />
        </GridItem>
        <GridItem colSpan={[2, 2, 1, 1]}>
          <TextInput
            name="address"
            onChange={handleChange}
            isDisabled={formDisabled}
            value={values.address}
            error={touched.address ? errors.address : ''}
            label={intl('address')}
          />
        </GridItem>

        <GridItem colSpan={[2, 2, 1, 1]}>
          <TextInput
            name="phone"
            type="string"
            value={`${values.phone}`}
            isDisabled={formDisabled}
            onChange={handleChange}
            error={touched.phone ? errors.phone : ''}
            label={intl('phone')}
          />
        </GridItem>
        <GridItem colSpan={[2, 2, 1, 1]}>
          <TextInput
            name="email"
            type="string"
            value={`${values.email}`}
            isDisabled={formDisabled}
            onChange={handleChange}
            error={touched.email ? errors.email : ''}
            label={intl('email')}
          />
        </GridItem>
      </Grid>
      {!formDisabled && (
        <Box mt="2em">
          <Button isLoading={loading} type="submit" mr="2em" colorScheme="teal">
            {intl('save')}
          </Button>
        </Box>
      )}
    </form>
  )
}

export default memo(UpdateShelterForm)
