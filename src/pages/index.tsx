import { Box, Input, Stack } from '@chakra-ui/react'
import Footer from 'components/Footer/footer'
import NewModal from 'components/Modal/modal'
import Navbar from 'components/Navbar/navbar'

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box>
        <NewModal />
        <Stack spacing={3}>
          <Input
            variant="outline"
            focusBorderColor="green.500"
            placeholder="Digite sua meta"
          />
        </Stack>
      </Box>
      <Footer />
    </Box>
  )
}
