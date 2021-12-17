import { Box, Heading } from '@chakra-ui/react'
import Footer from 'components/Footer/footer'
import NewModal from 'components/Modal/modal'
import Navbar from 'components/Navbar/navbar'

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
        <NewModal />
      </Box>

      <Footer />
    </>
  )
}
