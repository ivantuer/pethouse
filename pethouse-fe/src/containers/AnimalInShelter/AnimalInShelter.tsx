import { ArrowBackIcon } from '@chakra-ui/icons'
import { Badge, Box, Button, Divider, Grid, Image, Text } from '@chakra-ui/react'
import { CreateAnimalForm } from 'components/CreateAnimalForm'
import Header from 'components/Header/Header'
import { ANIMALS_PATH, SHELTER_PATH } from 'constants/routes'
import { useFindAnimalQuery } from 'generated/graphql'
import withLocalization, { IWithLocalization } from 'hocs/withLocalization'
import { FC, memo, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { TextInput } from 'UI/TextInput'

const AnimalInShelterContainer: FC<IWithLocalization> = ({ intl }) => {
  const { shelterId, animalId } = useParams<{ shelterId: string; animalId: string }>()

  const { data } = useFindAnimalQuery({
    variables: {
      query: {
        where: { id: animalId },
        relations: ['creator', 'shelter'],
      },
    },
  })

  const animal = useMemo(() => data?.findAnimal[0], [data])

  return (
    <Box minH="100vh">
      <Header />
      <Box w={['95%', '90%']} m="auto" mt="2em">
        <Link to={SHELTER_PATH.replace(':id', shelterId)}>
          <Button>
            <ArrowBackIcon mr="1em" />
            {intl('backToShelter')}
          </Button>
        </Link>
      </Box>
      <Box
        pb="2rem"
        w={['95%', '90%']}
        m="auto"
        mt={['1rem', '2rem']}
        display="flex"
        flexDirection={['column', 'column', 'row']}
        justifyContent="space-between"
      >
        <Box p="2em" borderRadius="0.5rem" flex={1} display="flex" flexDirection={['column', 'column', 'row']} bg="white">
          <Grid w={['100%', '100%', '20em']} mr="2em" h="fit-content" display="flex" flexWrap="wrap">
            <Image src={animal?.imageUrl || ''} minH="10em" w="100%" h="fit-content" alt="Барсик" />
          </Grid>

          <Box flex={1} mt={['2em', '2em', '0']}>
            <Box mb="1em" display="flex" alignItems="flex-start">
              <Text fontSize="4xl">{animal?.name}</Text>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {animal?.status}
              </Badge>
            </Box>
            <Divider />
            <Box my="1em">
              <Text fontSize="3xl" mb="0.5em" fw="500">
                Основна Інформація
              </Text>
              <Text mr="1em">
                Вік:{' '}
                <Text as="span" fontWeight="600">
                  {animal?.age} yrs
                </Text>
              </Text>
              <Text mr="1em">
                Стать:{' '}
                <Text as="span" fontWeight="600">
                  {animal?.gender}
                </Text>
              </Text>
              <Text mr="1em">
                Зріст:{' '}
                <Text as="span" fontWeight="600">
                  {animal?.height}
                  см
                </Text>
              </Text>
              <Text mr="1em">
                Вага:{' '}
                <Text as="span" fontWeight="600">
                  {animal?.weight}
                  кг
                </Text>
              </Text>
              <Text mr="1em">
                Стерилізований(на):{' '}
                <Text as="span" fontWeight="600">
                  {animal?.isSterilized ? 'Yes' : 'No'}
                </Text>
              </Text>
              {/* <CreateAnimalForm onSubmit={() => {}} loading={false} initialValues={{}} onCancel={() => {}} /> */}
            </Box>
            <Divider />
            <Box my="1em">
              <Text fontSize="3xl" mb="0.5em" fw="500">
                Стан тварини
              </Text>
              <TextInput type="date" />
              <Text mt="2em" mr="1em">
                Статус вигулу:{' '}
                <Text as="span" fontWeight="600">
                  {animal?.weight}
                  кг
                </Text>
              </Text>
              <Text mt="2em" mr="1em">
                Статус годування:{' '}
                <Text as="span" fontWeight="600">
                  {animal?.weight}
                  кг
                </Text>
              </Text>
              <Text mt="2em" mr="1em">
                Зовнішній вигляд:{' '}
                <Text as="span" fontWeight="600">
                  {animal?.weight}
                  кг
                </Text>
              </Text>
              <Text mt="2em" mr="1em">
                Фізичний стан тварини:{' '}
                <Text as="span" fontWeight="600">
                  {animal?.weight}
                  кг
                </Text>
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default memo(withLocalization(AnimalInShelterContainer))
