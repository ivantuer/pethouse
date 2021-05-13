import { Box, Center } from '@chakra-ui/react'
import { SignUpForm } from 'components/SignUpForm'
import { memo } from 'react'

const SignUpContainer = () => {
  return (
    <Center minH="100vh" p="2em">
      <Box w="30em" maxW="90%" bg="white" borderRadius="0.5em" p="2em">
        <SignUpForm />
      </Box>
    </Center>
  )
}

export default memo(SignUpContainer)
