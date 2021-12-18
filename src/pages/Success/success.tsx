import { Container } from '@chakra-ui/react'
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
        <Table />
      </Container>
    </>
  )
}
