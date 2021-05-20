import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  IconButton,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import Header from 'components/Header/Header'
import withLocalization, { IWithLocalization } from 'hocs/withLocalization'
import { FC, memo, useCallback, useState } from 'react'
import { UpdateShelterForm } from 'components/UpdateShelterForm'
import {
  FindAnimalDocument,
  FindAnimalQuery,
  FindShelterDocument,
  useCreateAnimalMutation,
  useDeleteAnimalMutation,
  useFindAnimalQuery,
  useFindShelterQuery,
  useMeQuery,
  UserRoleEnum,
  useUpdateAnimalMutation,
  useUpdateShelterMutation,
} from 'generated/graphql'
import { generatePath, Link, useParams } from 'react-router-dom'
import { IUpdateShelterSchema } from 'typescript/interface/shelter'
import { FormikHelpers } from 'formik'
import { omit, pick } from 'lodash'
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { CustomModal } from 'UI/Modal'
import { AlertModal } from 'UI/AlertModal'

import { CreateAnimalForm } from 'components/CreateAnimalForm'
import { ICreateAnimalSchema } from 'typescript/interface/animal'
import { SHELTER_ANIMAL_PATH, SHELTER_USERS_PATH } from 'constants/routes'

const ShelterContainer: FC<IWithLocalization> = ({ intl }) => {
  const { id } = useParams<{ id: string }>()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isAlertOpen, onOpen: onAlertOpen, onClose: onAlertClose } = useDisclosure()

  const [chosenForEditAnimal, setChosenForEditAnimal] = useState<ICreateAnimalSchema>()

  const { data: me } = useMeQuery()

  const { data } = useFindShelterQuery({
    variables: {
      query: {
        where: {
          id,
        },
      },
    },
  })

  const { data: animals } = useFindAnimalQuery({
    variables: {
      query: {
        relations: ['creator', 'shelter'],
        where: {
          shelter: {
            id,
          },
        },
      },
    },
  })

  const [updateShelterMutation, { loading }] = useUpdateShelterMutation({
    awaitRefetchQueries: true,
    refetchQueries: [
      {
        query: FindShelterDocument,
        variables: {
          query: {
            where: {
              id,
            },
          },
        },
      },
    ],
  })

  const onAlertModalClose = useCallback(() => {
    setChosenForEditAnimal(undefined)
    onAlertClose()
  }, [])

  const onModalClose = useCallback(() => {
    setChosenForEditAnimal(undefined)
    onClose()
  }, [])

  const [updateAnimalMutation, { loading: updateAnimalLoading }] = useUpdateAnimalMutation({
    onCompleted: onModalClose,
    awaitRefetchQueries: true,
    refetchQueries: [
      {
        query: FindAnimalDocument,
        variables: {
          query: {
            relations: ['creator', 'shelter'],
            where: {
              shelter: {
                id,
              },
            },
          },
        },
      },
    ],
  })
  const [deleteAnimalMutaion, { loading: deleteAnimalLoading }] = useDeleteAnimalMutation({
    onCompleted: onAlertModalClose,
    awaitRefetchQueries: true,
    refetchQueries: [
      {
        query: FindAnimalDocument,
        variables: {
          query: {
            relations: ['creator', 'shelter'],
            where: {
              shelter: {
                id,
              },
            },
          },
        },
      },
    ],
  })

  const [createAnimalMutation, { loading: createAnimalLoading }] = useCreateAnimalMutation({
    onCompleted: onClose,
    awaitRefetchQueries: true,
    refetchQueries: [
      {
        query: FindAnimalDocument,
        variables: {
          query: {
            relations: ['creator', 'shelter'],
            where: {
              shelter: {
                id,
              },
            },
          },
        },
      },
    ],
  })

  const onSubmit = useCallback(
    (formValues: IUpdateShelterSchema, formContext: FormikHelpers<IUpdateShelterSchema>) => {
      updateShelterMutation({
        variables: {
          updateShelterInput: {
            ...pick(formValues, ['email', 'address', 'title', 'phone']),
            id,
          },
        },
      })
    },
    [updateShelterMutation],
  )

  const deleteAnimal = useCallback(() => {
    deleteAnimalMutaion({
      variables: {
        deleteAnimalInput: {
          id: chosenForEditAnimal!.id,
        },
      },
    })
  }, [chosenForEditAnimal])

  const onAnimalEdit = useCallback((propAnimal: FindAnimalQuery['findAnimal'][0] | null) => {
    if (!propAnimal) {
      onOpen()
      return
    }
    setChosenForEditAnimal(omit(propAnimal, ['shelter', 'creator', '__typename']) as ICreateAnimalSchema)
    onOpen()
  }, [])

  const onAnimalDelete = useCallback(({ shelter, ...animal }: FindAnimalQuery['findAnimal'][0]) => {
    setChosenForEditAnimal(omit(animal, ['shelter', 'creator', '__typename']) as ICreateAnimalSchema)
    onAlertOpen()
  }, [])

  return (
    <Box minH="100vh">
      <Header />

      <Box
        pb="2rem"
        w={['95%', '90%', '75%']}
        m="auto"
        mt={['1rem', '2rem']}
        // h="10em"
        borderRadius="0.5rem"
        bg="white"
        p="2em"
      >
        <Box display="flex" flexDirection={['column', 'column', 'row']}>
          <Box w={['100%', '100%', '15em']} mr={['0', '0', '2em']} mb={['2em', '2em', '0']}>
            <Center>
              <Avatar w="100%" h="100%" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            </Center>
            <Text textAlign="center" fontSize="sm">
              {me?.me.role}
            </Text>
            <Link to={SHELTER_USERS_PATH.replace(':id', id)}>
              <Button mt="1em" variant="outline" colorScheme="teal" isFullWidth>
                {intl('shelterWorkers')}
              </Button>
            </Link>
          </Box>
          <Box w={['100%', '100%']} h="fit-content">
            <Text fontSize="3xl" mb="0.5em" fw="500">
              Дані притулку
            </Text>
            <Divider my="1em" />
            <UpdateShelterForm
              formDisabled={me?.me.role !== UserRoleEnum.ShelterAdmin}
              loading={loading}
              onSubmit={onSubmit}
              initialValues={data?.findShelter[0] as IUpdateShelterSchema}
            />
            <Divider my="1em" />
            <Text fontSize="3xl" mb="0.5em" fw="500">
              Тварини в притулку
            </Text>
            <Divider my="1em" />
            <Box display="flex" justifyContent="flex-end" mb="-2em" mt="2em">
              <IconButton mr="1em" aria-label="add animal" onClick={() => onAnimalEdit(null)} icon={<AddIcon />} />
            </Box>
            <Tabs colorScheme="teal">
              <TabList>
                <Tab>Зареєстровані</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {animals?.findAnimal.map((animal) => (
                    <Box mb="1em" key={animal.id} alignItems="center" d="flex">
                      <Link to={generatePath(SHELTER_ANIMAL_PATH, { shelterId: id, animalId: animal.id })}>
                        <Box alignItems="center" d="flex">
                          <Image w="8em" src={animal.imageUrl || ''} alt="animal" />
                          <Text ml="1em">{animal.name}</Text>
                        </Box>
                      </Link>

                      <Box flex={1} d="flex" justifyContent="flex-end" alignItems="center">
                        <IconButton onClick={() => onAnimalEdit(animal)} mr="1em" aria-label="edit animal" icon={<EditIcon />} />
                        <IconButton
                          isDisabled={me?.me.role !== UserRoleEnum.ShelterAdmin}
                          onClick={() => onAnimalDelete(animal)}
                          aria-label="delete animal"
                          icon={<DeleteIcon />}
                        />
                      </Box>
                    </Box>
                  ))}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
      <CustomModal label={intl('addAnimal')} isOpen={isOpen} onClose={onModalClose}>
        <CreateAnimalForm
          loading={updateAnimalLoading || createAnimalLoading}
          initialValues={chosenForEditAnimal}
          onCancel={onModalClose}
          onSubmit={({ shelter, ...formValues }) => {
            if (chosenForEditAnimal) {
              updateAnimalMutation({ variables: { updateAnimalInput: formValues } })
            }
            createAnimalMutation({ variables: { createAnimalInput: { ...formValues, shelter: { id } } } })
          }}
        />
      </CustomModal>

      <AlertModal
        loading={deleteAnimalLoading}
        onApproveClick={deleteAnimal}
        isOpen={isAlertOpen}
        onClose={onAlertModalClose}
        label={intl('removeAnimal')}
        text={intl('removeAnimalText')}
      />
    </Box>
  )
}

export default memo(withLocalization(ShelterContainer))
