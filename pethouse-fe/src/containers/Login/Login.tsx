import { Box, Center } from '@chakra-ui/react'
import { LoginForm } from 'components/LoginForm'
import { memo } from 'react'

const LoginContainer = () => {
  return (
    <Center minH="100vh" p="2em">
      <Box w="30em" maxW="90%" bg="white" borderRadius="0.5em" p="2em">
        <LoginForm />
      </Box>
    </Center>
  )
}

export default memo(LoginContainer)
