import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, ModalProps } from '@chakra-ui/react'

interface Props extends ModalProps {
  children: any
  label: any
}

const CustomModal = ({ isOpen, onClose, children, label }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minW={['95vw', '95vw', '65vw', 'auto']}>
        <ModalHeader>{label}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CustomModal
