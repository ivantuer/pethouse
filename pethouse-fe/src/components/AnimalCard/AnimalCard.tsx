import { Badge, Box, Image } from '@chakra-ui/react'
import { ANIMAL_PATH } from 'constants/routes'
import { memo } from 'react'
import { Link } from 'react-router-dom'

const AnimalCard = () => {
  return (
    <Link to={ANIMAL_PATH.replace(':id', '1')}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/1200px-VAN_CAT.png" alt="Барсик" />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
              1 лапка &bull; 2 вушка
            </Box>
          </Box>

          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            Барсик
          </Box>

          <Box>
            2{' '}
            <Box as="span" color="gray.600" fontSize="sm">
              роки
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

export default memo(AnimalCard)
