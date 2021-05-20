import { Avatar, Box, Button, Center, Divider, Grid, GridItem, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { AnimalCard } from 'components/AnimalCard'
import Header from 'components/Header/Header'
import { MeDocument, useFindMyAnimalQuery, useMeQuery, UserRoleEnum, useUpdateMyUserMutation } from 'generated/graphql'
import withLocalization, { IWithLocalization } from 'hocs/withLocalization'
import { FC, memo } from 'react'
import { TextInput } from 'UI/TextInput'
import { UpdateProfileForm } from 'components/UpdateProfileForm'
import { omit, pick } from 'lodash'
import { IUpdateProfileSchema } from 'typescript/interface/user'
import { Link } from 'react-router-dom'
import { SHELTER_PATH } from 'constants/routes'

const ProfileContainer: FC<IWithLocalization> = ({ intl }) => {
  const { data } = useFindMyAnimalQuery({
    variables: {
      query: {
        relations: ['creator', 'shelter'],
      },
    },
  })

  const { data: me } = useMeQuery()

  const [updateMyUserMutation, { loading }] = useUpdateMyUserMutation({
    refetchQueries: [{ query: MeDocument }],
  })

  console.log(me)
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
              Власник притулку
            </Text>
            {[UserRoleEnum.ShelterAdmin, UserRoleEnum.ShelterWorker].includes(me?.me.role as UserRoleEnum) && (
              <Link to={SHELTER_PATH.replace(':id', me?.me.shelter?.id || '')}>
                <Button mt="1em" variant="outline" colorScheme="teal" isFullWidth>
                  Управління притулком
                </Button>
              </Link>
            )}

            <Button mt="1em" variant="outline" colorScheme="teal" isFullWidth>
              змінити пароль
            </Button>
            <Button mt="1em" isFullWidth>
              log out
            </Button>
          </Box>
          <Box w={['100%', '100%']} h="fit-content">
            <Text fontSize="3xl" mb="0.5em" fw="500">
              Особисті дані
            </Text>
            <Divider my="1em" />
            <UpdateProfileForm
              initialValues={me?.me as IUpdateProfileSchema}
              onSubmit={(formValues) =>
                updateMyUserMutation({ variables: { updateUserInput: pick(formValues, ['firstName', 'lastName', 'phone', 'jobPosition']) } })
              }
              loading={loading}
            />
            <Divider my="1em" />
            <Text fontSize="3xl" mb="0.5em" fw="500">
              Мої Тварини
            </Text>
            <Divider my="1em" />
            <Tabs colorScheme="teal">
              <TabList>
                <Tab>Взяті під опіку</Tab>
                <Tab>Зареєстровані</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>Here it goes taken</TabPanel>
                <TabPanel>
                  <SimpleGrid columns={[1, 2, 3]} spacing="2rem">
                    {data?.findMyAnimal?.map((animal) => (
                      <AnimalCard key={animal.id} animal={animal} />
                    ))}
                  </SimpleGrid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default memo(withLocalization(ProfileContainer))
