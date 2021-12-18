import {
  Box,
  Button,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/react'
import { MdCropFree } from 'react-icons/md'
import Footer from 'components/Footer/footer'
import NewModal from 'components/Modal/modal'
import Navbar from 'components/Navbar/navbar'
import Link from 'next/link'

export default function Home() {
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
            <ListItem>
              <ListIcon as={MdCropFree} color="green.500" w={5} h={5} />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
          </List>
          <Box m={10}>
            <NewModal />
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

      <Footer />
    </>
  )
}
