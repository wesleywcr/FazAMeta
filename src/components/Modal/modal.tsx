/* eslint-disable react/no-children-prop */

import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
  Textarea,
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
              META
            </Text>
            <Stack spacing={3}>
              <Input
                variant="outline"
                focusBorderColor="purple.500"
                placeholder="Digite sua meta"
              />
              <Text fontWeight="bold" mb="1rem">
                OBJETIVOS
              </Text>
              <Textarea
                variant="outline"
                focusBorderColor="purple.500"
                placeholder="Digite seu Objetivo"
              />
              <Text fontWeight="bold" mb="1rem">
                QUANDO
              </Text>
              <Input
                type="date"
                variant="outline"
                focusBorderColor="purple.500"
                placeholder="Data para atingir sua meta"
              />
              <Text fontWeight="bold" mb="1rem">
                CUSTO
              </Text>
              <InputGroup>
                <InputLeftAddon children="R$" />
                <NumberInput
                  precision={2}
                  step={0.2}
                  focusBorderColor="purple.500"
                  placeholder="Digite seu custo"
                >
                  <NumberInputField />
                </NumberInput>
              </InputGroup>
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
