import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react'

export default function NewModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        bg={'purple.700'}
        _hover={{ bg: 'gray.100', color: 'purple.700' }}
        onClick={onOpen}
      >
        Criar Meta
      </Button>

      <Modal
        size={'xl'}
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent color={'gray.800'}>
          <ModalHeader>SUA META</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              You can scroll the content behind the modal
            </Text>
            <Stack spacing={3}>
              <Input
                variant="outline"
                focusBorderColor="purple.500"
                placeholder="Digite sua meta"
              />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="purple.700"
              color={'gray.100'}
              _hover={{
                bg: 'gray.300',
                color: 'purple.700'
              }}
              mr={3}
              variant="ghost"
            >
              Criar meta
            </Button>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
