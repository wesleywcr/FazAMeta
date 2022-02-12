import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Heading } from '@chakra-ui/react'
import Table from 'components/Table/table'
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

export default function SuccessPage() {
  const componentRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })
  const getPageMargins = () => {
    return `@page { margin-left:4.8rem; margin-top:1.2rem; !important; }`
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
        <Box ref={componentRef}>
          <style>{getPageMargins()} </style>
          <Table />
        </Box>
      </Container>
      <Box p={4}>
        <Button
          bg={'green.700'}
          _hover={{ bg: 'gray.100', color: 'green.700' }}
          onClick={handlePrint}
        >
          Imprimir Metas
        </Button>
      </Box>
    </>
  )
}
