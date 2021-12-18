import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Container, Heading } from '@chakra-ui/react'
import Table from 'components/Table/table'

export default function SuccessPage() {
  return (
    <>
      <Container
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify="center"
        align="center"
      >
        <Box textAlign="center" py={10} px={6}>
          <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            BOA SORTE
          </Heading>
        </Box>
        <Table />
      </Container>
    </>
  )
}
