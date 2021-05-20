import { Badge, Box, Image } from '@chakra-ui/react'
import { ANIMAL_PATH } from 'constants/routes'
import { FindAnimalQuery } from 'generated/graphql'
import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

interface IAnimalCard {
  animal: FindAnimalQuery['findAnimal'][0]
}

const AnimalCard: FC<IAnimalCard> = ({ animal }) => {
  return (
    <Link to={ANIMAL_PATH.replace(':id', animal.id)}>
      <Box h="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
        {animal.imageUrl ? <Image minH="10em" src={animal.imageUrl} alt="Барсик" /> : <Box h="10em" />}
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {animal.status}
            </Badge>
            <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
              {animal.height} см &bull; {animal.weight} кг
            </Box>
          </Box>

          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {animal.name}
          </Box>

          <Box>
            {animal.age}{' '}
            <Box as="span" color="gray.600" fontSize="sm">
              років
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

export default memo(AnimalCard)
