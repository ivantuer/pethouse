import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react'
import { AnimalCard } from 'components/AnimalCard'
import Header from 'components/Header/Header'
import withLocalization, { IWithLocalization } from 'hocs/withLocalization'
import { FC, memo } from 'react'
import { Select, TextInput } from 'UI/TextInput'

const AnimalsContainer: FC<IWithLocalization> = ({ intl }) => {
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
        <Box
          borderRadius="0.5rem"
          mr={['0', '0', '1rem', '2rem']}
          mb={['1rem', '2rem', '0']}
          w={['100%', '100%', '15rem', '20rem']}
          bg="white"
          p="2em"
          h="fit-content"
        >
          <Select
            FormControlProps={{ mb: '1em' }}
            label="Animal"
            options={[
              { value: 'both', name: 'Both' },
              { value: 'cat', name: 'Cat' },
              { value: 'dog', name: 'Dog' },
            ]}
          />
          <TextInput FormControlProps={{ mb: '1em' }} label="Name" />
          <Select
            FormControlProps={{ mb: '1em' }}
            label="Gender"
            options={[
              { value: 'man', name: 'Man' },
              { value: 'woman', name: 'Woman' },
            ]}
          />
          <Select
            FormControlProps={{ mb: '1em' }}
            label="Color"
            options={[
              { value: 'black', name: 'Black' },
              { value: 'white', name: 'White' },
            ]}
          />
          <Select
            label="Age"
            options={[
              { value: '1-', name: 'Less than 1' },
              { value: '1', name: '1' },
              { value: '2', name: '2' },
              { value: '3', name: '3' },
              { value: '4', name: '4' },
              { value: '5', name: '5' },
              { value: '6', name: '6' },
              { value: '7+', name: '7+' },
            ]}
          />
          <Button mt="2em" colorScheme="teal" variant="solid" isFullWidth>
            {intl('apply')}
          </Button>
        </Box>
        <Box p="2em" borderRadius="0.5rem" flex={1} bg="white">
          <Box display="flex" mb="1rem">
            <Box display="flex">
              <Text mr="0.5rem">Всього тварин: </Text> <Text fontWeight="600">228</Text>
            </Box>
          </Box>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="2rem">
            {Array(10)
              .fill('a')
              .map(() => (
                <AnimalCard />
              ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}

export default memo(withLocalization(AnimalsContainer))
