import { ArrowBackIcon } from '@chakra-ui/icons'
import { Badge, Box, Button, Divider, Grid, Image, Text } from '@chakra-ui/react'
import Header from 'components/Header/Header'
import { ANIMALS_PATH } from 'constants/routes'
import { useFindAnimalQuery } from 'generated/graphql'
import withLocalization, { IWithLocalization } from 'hocs/withLocalization'
import { FC, memo, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'

const AnimalContainer: FC<IWithLocalization> = ({ intl }) => {
  const { id } = useParams<{ id: string }>()

  const { data } = useFindAnimalQuery({
    variables: {
      query: {
        where: { id },
        relations: ['creator', 'shelter'],
      },
    },
  })

  const animal = useMemo(() => data?.findAnimal[0], [data])

  return (
    <Box minH="100vh">
      <Header />
      <Box w={['95%', '90%']} m="auto" mt="2em">
        <Link to={ANIMALS_PATH}>
          <Button>
            <ArrowBackIcon mr="1em" />
            Back to animals list
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
            </Box>
            <Divider />
            <Box my="1em">
              <Text fontSize="3xl" mb="0.5em" fw="500">
                Контакти
              </Text>
              <Text mr="1em">
                Адреса:{' '}
                <Text as="span" fontWeight="600">
                  вул. Бойчука 40а
                </Text>
              </Text>
              <Text mr="1em">
                Притулок:{' '}
                <Text as="span" fontWeight="600">
                  Гривня Притулок
                </Text>
              </Text>
              <Text mr="1em">
                Телефон:{' '}
                <Text as="span" fontWeight="600">
                  +380683256561
                </Text>
              </Text>
              <Text mr="1em">
                Email:{' '}
                <Text as="span" fontWeight="600">
                  ivantuer@gmail.com
                </Text>
              </Text>
            </Box>
            <Divider />
            <Box my="1em">
              <Button fontSize="2xl" size="lg" colorScheme="teal">
                Забрати
              </Button>
            </Box>
            <Divider />
            <Box my="1em">
              <Text fontSize="3xl" mb="0.5em" fw="500">
                Опис
              </Text>
              <Text mr="1em">{animal?.description}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default memo(withLocalization(AnimalContainer))
