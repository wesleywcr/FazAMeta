/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Container,
  Heading,
  List,
  ListItem,
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
  useDisclosure,
  Checkbox
} from '@chakra-ui/react'


import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { setCookie, parseCookies } from 'nookies'
import { useContext, useEffect, useRef, useState } from 'react'
import {v4 as generatedID } from 'uuid'
import { ListContext } from 'context/list'
import Footer from 'components/Footer/footer'
import Navbar from 'components/Navbar/navbar'


export default function Home(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const inputRef = useRef<HTMLInputElement>('' || null)

  const { setItems,items } = useContext(ListContext)
  const [newItem, setNewItem] = useState('')

  const addItem = () => {
    if (newItem) {
      setItems((items: any) => [
        {
          id: generatedID(),
          title: newItem,
          isFinished: false
        },
        ...items
      ])
      setNewItem('')
      
    }
  }
  const arrItems = JSON.stringify(items)
  useEffect(()=>{
    setCookie(null, 'GOAL',arrItems, {
      maxAge: 86400 * 7,
      path: '/'
    })

  })


  console.log('GOAL:', props.GOAL, 'ITEMS:', items,'NOVO ITEM:',newItem)

  return (
    <>
      <Navbar />
      <Box>
        <Box p={4}>
          <Heading as="h1" textAlign={'center'}>
            FAÇA SUA META
          </Heading>
        </Box>
        <Container
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify="center"
          align="center"
        >
          <List spacing={3}>
          
              {items.map((item) => {
                return(
                  <>
            
                <ListItem key={item.id}>
                  <Checkbox   w={5} h={5} />
                  {item.title}
                  {props.GOAL.title}
                  </ListItem>
           
                </>
                )
              })}
          
          </List>
          <Box m={10}>
            <>
              <Button
                width={'10rem'}
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
                        ref={inputRef}
                        variant="outline"
                        focusBorderColor="purple.500"
                        placeholder="Digite sua meta"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
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
                      onClick={addItem}
                    >
                      Criar meta
                    </Button>
                    <Button onClick={onClose}>Fechar</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
          </Box>
          <Box>
            <Link href={'/success'}>
              <Button
                width={'10rem'}
                bg={'green.700'}
                _hover={{ bg: 'gray.100', color: 'green.700' }}
              >
                Imprimir Metas
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>

      <Footer  />
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context)

  console.log(cookies, cookies.GOAL)
  return {
    props: {
      msg: '[SERVER] CHEGO AQUI',
      GOAL: cookies.GOAL || null
    }
  }
}
