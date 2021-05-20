import { Box, Button, Checkbox, Grid, GridItem } from '@chakra-ui/react'
import { FC, memo } from 'react'
import { Select, TextInput, TextArea } from 'UI/TextInput'

import { FormikHelpers, useFormik } from 'formik'

import { useLocalization } from 'hooks/useLocalization'
import { ICreateAnimalSchema } from 'typescript/interface/animal'
import { AnimalColorEnum, AnimalGenderEnum, AnimalStatusEnum, AnimalTypeEnum } from 'generated/graphql'
import { initialValuesCreateAnimalForm, schemaCreateAnimalForm } from './schema'

interface ICreateAnimalFormProps {
  onSubmit: (formValues: ICreateAnimalSchema, formContext: FormikHelpers<ICreateAnimalSchema>) => void
  onCancel: () => void
  loading: boolean
  initialValues?: ICreateAnimalSchema
}

const CreateAnimalForm: FC<ICreateAnimalFormProps> = ({ onSubmit, onCancel, loading, initialValues }) => {
  const { errors, touched, handleChange, handleSubmit, values } = useFormik<ICreateAnimalSchema>({
    initialValues: { ...initialValuesCreateAnimalForm, ...initialValues },
    validationSchema: schemaCreateAnimalForm,
    onSubmit: onSubmit,
  })
  const intl = useLocalization()

  return (
    <form onSubmit={handleSubmit}>
      <Grid gap={['1em', '1em', '2em']} templateColumns="repeat(2, 1fr)">
        <GridItem colSpan={[2, 2, 1, 1]}>
          <TextInput name="name" onChange={handleChange} value={values.name} error={touched.name ? errors.name : ''} label={intl('name')} />
        </GridItem>

        <GridItem colSpan={[2, 2, 1, 1]}>
          <TextInput
            name="age"
            type="number"
            value={`${values.age}`}
            onChange={handleChange}
            error={touched.age ? errors.age : ''}
            label={intl('age')}
          />
        </GridItem>
        <GridItem colSpan={[2, 2, 1, 1]}>
          <TextInput
            name="weight"
            type="number"
            value={`${values.weight}`}
            onChange={handleChange}
            error={touched.weight ? errors.weight : ''}
            label={intl('weight')}
          />
        </GridItem>
        <GridItem colSpan={[2, 2, 1, 1]}>
          <TextInput
            name="height"
            type="number"
            value={`${values.height}`}
            onChange={handleChange}
            error={touched.height ? errors.height : ''}
            label={intl('height')}
          />
        </GridItem>
        <GridItem colSpan={[2, 2, 1, 1]}>
          <Select
            FormControlProps={{ mb: '1em' }}
            label={intl('status')}
            name="status"
            value={values.status}
            error={touched.status ? errors.status : ''}
            onChange={handleChange}
            options={Object.entries(AnimalStatusEnum).map(([key, value]) => {
              return { value: value, name: key }
            })}
          />
        </GridItem>

        <GridItem colSpan={[2, 2, 1, 1]}>
          <Select
            FormControlProps={{ mb: '1em' }}
            label={intl('gender')}
            name="gender"
            value={values.gender}
            error={touched.gender ? errors.gender : ''}
            onChange={handleChange}
            options={Object.entries(AnimalGenderEnum).map(([key, value]) => {
              return { value: value, name: key }
            })}
          />
        </GridItem>
        <GridItem colSpan={[2, 2, 1, 1]}>
          <Select
            FormControlProps={{ mb: '1em' }}
            label={intl('color')}
            name="color"
            value={values.color}
            error={touched.color ? errors.color : ''}
            onChange={handleChange}
            options={Object.entries(AnimalColorEnum).map(([key, value]) => {
              return { value: value, name: key }
            })}
          />
        </GridItem>
        <GridItem colSpan={[2, 2, 1, 1]}>
          <Select
            FormControlProps={{ mb: '1em' }}
            label={intl('animalType')}
            name="type"
            value={values.type}
            error={touched.type ? errors.type : ''}
            onChange={handleChange}
            options={Object.entries(AnimalTypeEnum).map(([key, value]) => {
              return { value: value, name: key }
            })}
          />
        </GridItem>
        <GridItem colSpan={[2]}>
          <TextInput
            name="imageUrl"
            value={values.imageUrl}
            onChange={handleChange}
            label={intl('imageUrl')}
            error={touched.imageUrl ? errors.imageUrl : ''}
          />
        </GridItem>

        <GridItem colSpan={[2]}>
          <TextArea
            name="description"
            onChange={handleChange}
            value={values.description}
            error={touched.description ? errors.description : ''}
            label={intl('description')}
          />
        </GridItem>

        <GridItem display="flex" alignItems="flex-end" colSpan={[2, 2, 1, 1]}>
          <Checkbox size="lg" isChecked={values.isSterilized} name="isSterilized" onChange={handleChange}>
            {intl('sterilized')}
          </Checkbox>
        </GridItem>
      </Grid>
      <Box display="flex" mt="2em" justifyContent="flex-end">
        <Button isLoading={loading} type="submit" mr="2em" colorScheme="teal">
          {initialValues ? intl('updateAnimal') : intl('addAnimal')}
        </Button>
        <Button isDisabled={loading} onClick={onCancel} colorScheme="teal" variant="outline">
          {intl('back')}
        </Button>
      </Box>
    </form>
  )
}

export default memo(CreateAnimalForm)
