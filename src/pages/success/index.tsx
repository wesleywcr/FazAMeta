import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Heading } from '@chakra-ui/react'
import Table from 'components/Table/table'

export default function SuccessPage() {
  function handleSave() {
    window.print()
  }
  return (
    <>
      <Container
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify="center"
        align="center"
      >
        <Box
          py={10}
          px={6}
          w={'100%'}
          marginLeft={{ base: '10rem', md: '0' }}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
          <Heading as="h2" size="xl" mt={6} mb={2} textAlign="center">
            BOA SORTE
          </Heading>
        </Box>
        <Table />
      </Container>
      <Box p={4}>
        <Button
          bg={'green.700'}
          _hover={{ bg: 'gray.100', color: 'green.700' }}
          onClick={handleSave}
        >
          Imprimir Metas
        </Button>
      </Box>
    </>
  )
}
