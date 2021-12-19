import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box
} from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
export default function Table() {
  return (
    <>
      <Box boxShadow="md" p="6" rounded="md" bg="gray.700">
        <ChakraTable variant="simple">
          <Thead>
            <Tr>
              <Th>META</Th>
              <Th>OBJETIVO</Th>
              <Th>QUANDO</Th>
              <Th isNumeric>CUSTO</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{parseCookies().GOAL}</Td>
              <Td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, doloremque pariatur rem voluptate accusantium
                voluptatum eum debitis accusamus necessitatibus in
                exercitationem sunt consequuntur voluptatibus, reprehenderit
                consectetur! Sunt nulla vero commodi?
              </Td>
              <Td>05/08/22</Td>
              <Td isNumeric>{`R$100,00`}</Td>
            </Tr>
          </Tbody>
        </ChakraTable>
      </Box>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context)

  console.log(cookies, cookies.GOAL)
  return {
    props: {
      GOAL: cookies.GOAL || null
    }
  }
}
