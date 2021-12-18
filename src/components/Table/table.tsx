import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Text,
  Box
} from '@chakra-ui/react'
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
              <Td>Ser incrivel</Td>
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
          <Tfoot>
            <Text>Informações</Text>
          </Tfoot>
        </ChakraTable>
      </Box>
    </>
  )
}
