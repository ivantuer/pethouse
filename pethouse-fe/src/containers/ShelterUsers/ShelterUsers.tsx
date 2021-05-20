import { Avatar, Badge, Box, Button, Center, Divider, IconButton, Image, Text, useDisclosure } from '@chakra-ui/react'
import Header from 'components/Header/Header'
import withLocalization, { IWithLocalization } from 'hocs/withLocalization'
import { FC, memo, useCallback, useState } from 'react'
import {
  useMeQuery,
  useFindUserQuery,
  FindUserQuery,
  useDeleteUserFromShelterMutation,
  FindUserDocument,
  useUpdateUserShelterMutation,
} from 'generated/graphql'
import { Link, useParams } from 'react-router-dom'
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { AlertModal } from 'UI/AlertModal'
import { CustomModal } from 'UI/Modal'
import { IInviteToShelterFormSchema, IUpdateUserRoleSchema } from 'typescript/interface/user'
import { ChangeUserRoleForm } from 'components/ChangeUserRoleForm'
import { InviteUserToShelterForm } from 'components/InviteUserToShelterForm'
import { SHELTER_PATH } from 'constants/routes'

const ShelterContainer: FC<IWithLocalization> = ({ intl }) => {
  const { id } = useParams<{ id: string }>()
  const { isOpen: isAlertOpen, onOpen: onAlertOpen, onClose: onAlertClose } = useDisclosure()
  const { isOpen: isInviteOpen, onOpen: onInviteOpen, onClose: onInviteClose } = useDisclosure()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [chosenForEditRoleUser, setChosenForEditRoleUser] = useState<IUpdateUserRoleSchema>()

  const { data: me } = useMeQuery()

  const { data: users } = useFindUserQuery({
    variables: {
      query: {
        relations: ['shelter'],
        where: {
          shelter: {
            id,
          },
        },
      },
    },
  })

  const { data: availableToJoinUsers } = useFindUserQuery({
    variables: {
      query: {
        relations: ['shelter'],
        where: {
          shelter: null,
        },
      },
    },
  })

  const onAlertModalClose = useCallback(() => {
    setChosenForEditRoleUser(undefined)
    onAlertClose()
  }, [])

  const [deleteUserFromShelterMutation, { loading: deleteLoading }] = useDeleteUserFromShelterMutation({
    onCompleted: onAlertModalClose,
    refetchQueries: [
      {
        query: FindUserDocument,
        variables: {
          query: {
            relations: ['shelter'],
            where: {
              shelter: {
                id,
              },
            },
          },
        },
      },
      {
        query: FindUserDocument,
        variables: {
          query: {
            relations: ['shelter'],
            where: {
              shelter: null,
            },
          },
        },
      },
    ],
  })

  const onModalClose = useCallback(() => {
    setChosenForEditRoleUser(undefined)
    onClose()
  }, [])

  const [updateUserShelterRoleMutation, { loading: updateLoading }] = useUpdateUserShelterMutation({
    onCompleted: () => {
      onModalClose()
      onInviteClose()
    },
    refetchQueries: [
      {
        query: FindUserDocument,
        variables: {
          query: {
            relations: ['shelter'],
            where: {
              shelter: {
                id,
              },
            },
          },
        },
      },
      {
        query: FindUserDocument,
        variables: {
          query: {
            relations: ['shelter'],
            where: {
              shelter: null,
            },
          },
        },
      },
    ],
  })

  const onUserChange = useCallback((user: FindUserQuery['findUser'][0]) => {
    setChosenForEditRoleUser({ id: user.id, role: user.role!, firstName: user.firstName!, lastName: user.lastName! })
    onOpen()
  }, [])

  const onUserDeleteFromShelter = useCallback((user: FindUserQuery['findUser'][0]) => {
    setChosenForEditRoleUser({ id: user.id, role: user.role!, firstName: user.firstName!, lastName: user.lastName! })
    onAlertOpen()
  }, [])

  const onUpdateRoleSubmit = useCallback(
    (formValues: IUpdateUserRoleSchema) => {
      updateUserShelterRoleMutation({
        variables: {
          updateUserShelterInput: {
            id: chosenForEditRoleUser!.id,
            role: formValues.role,
          },
        },
      })
    },
    [updateUserShelterRoleMutation, chosenForEditRoleUser],
  )

  const onDeleteUserSubmit = useCallback(() => {
    deleteUserFromShelterMutation({
      variables: {
        deleteUserFromShelterInput: {
          id: chosenForEditRoleUser!.id,
        },
      },
    })
  }, [deleteUserFromShelterMutation, chosenForEditRoleUser])

  const onInviteUser = useCallback(
    (formValues: IInviteToShelterFormSchema) => {
      updateUserShelterRoleMutation({
        variables: {
          updateUserShelterInput: {
            id: formValues.id,
            role: formValues.role,
          },
        },
      })
    },
    [updateUserShelterRoleMutation],
  )

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
              <Avatar w="10em" h="10em" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            </Center>
            <Text textAlign="center" fontSize="sm">
              {me?.me.role}
            </Text>
            <Link to={SHELTER_PATH.replace(':id', id)}>
              <Button mt="1em" variant="outline" colorScheme="teal" isFullWidth>
                {intl('manageShelter')}
              </Button>
            </Link>
          </Box>
          <Box w={['100%', '100%']} h="fit-content">
            <Box d="flex" justifyContent="space-between" alignItems="center">
              <Text fontSize="3xl" mb="0.5em" fw="500">
                {intl('shelterUsers')}
              </Text>
              <Box display="flex" justifyContent="flex-end">
                <IconButton aria-label="add animal" onClick={onInviteOpen} icon={<AddIcon />} />
              </Box>
            </Box>

            <Divider my="1em" />

            {users?.findUser.map((user) => (
              <Box mb="1em" key={user.id} alignItems="center" d="flex">
                <Avatar w="3em" h="3em" name={`${user.firstName} ${user.lastName}`} alt="animal" />
                <Text ml="1em">
                  {user.firstName} {user.lastName}
                  <Badge ml="1em" borderRadius="full" px="2" colorScheme="teal">
                    {user.role}
                  </Badge>
                </Text>
                <Box flex={1} d="flex" justifyContent="flex-end" alignItems="center">
                  <IconButton onClick={() => onUserChange(user)} mr="1em" aria-label="edit user position" icon={<EditIcon />} />
                  <IconButton onClick={() => onUserDeleteFromShelter(user)} aria-label="delete user" icon={<DeleteIcon />} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <CustomModal label={intl('changeUserRole')} isOpen={isOpen} onClose={onModalClose}>
        <ChangeUserRoleForm initialValues={chosenForEditRoleUser} loading={updateLoading} onCancel={onModalClose} onSubmit={onUpdateRoleSubmit} />
      </CustomModal>
      <CustomModal label={intl('inviteUser')} isOpen={isInviteOpen} onClose={onInviteClose}>
        <InviteUserToShelterForm
          users={availableToJoinUsers?.findUser || []}
          loading={updateLoading}
          onCancel={onInviteClose}
          onSubmit={onInviteUser}
        />
      </CustomModal>
      <AlertModal
        loading={deleteLoading}
        onApproveClick={onDeleteUserSubmit}
        isOpen={isAlertOpen}
        onClose={onAlertModalClose}
        label={intl('removeUserFromShelter')}
        text={intl('removeUserFromShelterText')}
      />
    </Box>
  )
}

export default memo(withLocalization(ShelterContainer))
