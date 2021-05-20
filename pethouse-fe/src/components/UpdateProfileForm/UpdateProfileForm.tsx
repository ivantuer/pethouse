import { Box, Button, Checkbox, Grid, GridItem } from '@chakra-ui/react'
import { FC, memo } from 'react'
import { Select, TextInput } from 'UI/TextInput'

import { FormikHelpers, useFormik } from 'formik'

import { useLocalization } from 'hooks/useLocalization'
import { MeQuery } from 'generated/graphql'
import { initialValuesUpdateProfileForm, schemaUpdateProfileForm } from './schema'
import { IUpdateProfileSchema } from '../../typescript/interface/user'

interface IUpdateProfileFormProps {
  onSubmit: (formValues: IUpdateProfileSchema, formContext: FormikHelpers<IUpdateProfileSchema>) => void
  loading: boolean
  initialValues: IUpdateProfileSchema
}

const UpdateProfileForm: FC<IUpdateProfileFormProps> = ({ onSubmit, loading, initialValues }) => {
  const { errors, touched, handleChange, handleSubmit, values } = useFormik<IUpdateProfileSchema>({
    initialValues: { ...initialValuesUpdateProfileForm, ...initialValues },
    validationSchema: schemaUpdateProfileForm,
    onSubmit: onSubmit,
    enableReinitialize: true,
  })
  const intl = useLocalization()

  return (
    <form onSubmit={handleSubmit}>
      <Grid gap={['1em', '1em', '2em']} templateColumns="repeat(2, 1fr)">
        <GridItem colSpan={[2, 2, 1, 1]}>
          <TextInput
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
            error={touched.firstName ? errors.firstName : ''}
            label={intl('firstName')}
          />
        </GridItem>
        <GridItem colSpan={[2, 2, 1, 1]}>
          <TextInput
            name="lastName"
            onChange={handleChange}
            value={values.lastName}
            error={touched.lastName ? errors.lastName : ''}
            label={intl('lastName')}
          />
        </GridItem>

        <GridItem colSpan={[2, 2, 1, 1]}>
          <TextInput
            name="phone"
            type="string"
            value={`${values.phone}`}
            onChange={handleChange}
            error={touched.phone ? errors.phone : ''}
            label={intl('phone')}
          />
        </GridItem>
        <GridItem colSpan={[2, 2, 1, 1]}>
          <TextInput
            name="jobPosition"
            type="string"
            value={`${values.jobPosition}`}
            onChange={handleChange}
            error={touched.jobPosition ? errors.jobPosition : ''}
            label={intl('jobPosition')}
          />
        </GridItem>
        <GridItem colSpan={[2, 2, 1, 1]}>
          <TextInput
            name="email"
            type="string"
            value={`${values.email}`}
            isDisabled
            // onChange={handleChange}
            // error={touched.jobPosition ? errors.jobPosition : ''}
            label={intl('email')}
          />
        </GridItem>
      </Grid>
      <Box mt="2em">
        <Button isLoading={loading} type="submit" mr="2em" colorScheme="teal">
          {intl('save')}
        </Button>
      </Box>
    </form>
  )
}

export default memo(UpdateProfileForm)
