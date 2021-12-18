import { Box, Container, Heading } from '@chakra-ui/react'
import Footer from 'components/Footer/footer'
import NewModal from 'components/Modal/modal'
import Navbar from 'components/Navbar/navbar'
import Table from 'components/Table/table'

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
          <Table />
          <NewModal />
        </Container>
      </Box>

      <Footer />
    </>
  )
}
