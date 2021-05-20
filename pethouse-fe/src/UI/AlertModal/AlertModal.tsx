import { Button, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay } from '@chakra-ui/react'

import React, { FC, useRef } from 'react'
import { useLocalization } from 'hooks/useLocalization'

interface IAlertModalProps {
  label: string
  text: string
  onApproveClick: () => void
  isOpen: boolean
  loading: boolean
  onClose: () => void
}

const AlertModal: FC<IAlertModalProps> = ({ isOpen, onClose, onApproveClick, label, text, loading }) => {
  const intl = useLocalization()
  const destructiveRef = useRef<any>()
  return (
    <AlertDialog leastDestructiveRef={destructiveRef} isOpen={isOpen} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {label}
          </AlertDialogHeader>

          <AlertDialogBody>{text}</AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={onClose}>{intl('cancel')}</Button>
            <Button isLoading={loading} colorScheme="red" onClick={onApproveClick} ml={3}>
              {intl('confirm')}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default AlertModal
