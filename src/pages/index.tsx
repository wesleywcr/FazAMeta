import { Box, Button, Container, Heading } from '@chakra-ui/react'
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
          <Link href={'/success'}>
            <Button
              bg={'green.700'}
              _hover={{ bg: 'gray.100', color: 'green.700' }}
            >
              Imprimir Metas
            </Button>
          </Link>
          <NewModal />
        </Container>
      </Box>

      <Footer />
    </>
  )
}
