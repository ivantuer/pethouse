import { Badge, Box, Button, Grid, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { AnimalCard } from 'components/AnimalCard'
import Header from 'components/Header/Header'
import withLocalization, { IWithLocalization } from 'hocs/withLocalization'
import { FC, memo } from 'react'
import { Select, TextInput } from 'UI/TextInput'

const AnimalContainer: FC<IWithLocalization> = ({ intl }) => {
  return (
    <Box minH="100vh">
      <Header />
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
          <Grid w={['100%', '20em']} mr="2em" display="flex" flexWrap="wrap">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/1200px-VAN_CAT.png" w="100%" alt="Барсик" />
            <Box d="flex" mt="1rem" maxWidth="100%" overflowX="auto" h="5em">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/1200px-VAN_CAT.png" mr="1em" alt="Барсик" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/1200px-VAN_CAT.png" mr="1em" alt="Барсик" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/1200px-VAN_CAT.png" alt="Барсик" />
            </Box>
          </Grid>
          <Box flex={1}>
            <Box display="flex" alignItems="flex-start">
              <Text fontSize="4xl">Барсик</Text>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default memo(withLocalization(AnimalContainer))
