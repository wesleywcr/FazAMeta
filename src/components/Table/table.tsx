import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  ListIcon,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import { ListContext } from 'context/list'
import { parseCookies } from 'nookies'
import { useContext } from 'react'
import { MdCropFree } from 'react-icons/md'

type ProspItems = {
  id: number
  title: string
  objective: string
  when: Date
  cost: string
  isFinished: boolean
}
export default function Table() {
  const { items } = useContext(ListContext)
  const ItemsArray = JSON.parse(parseCookies().GOAL)
  // console.log(parseCookies().GOAL)
  console.log('ITEMS CONXTEXT:', items, 'GOAL:', parseCookies().GOAL)

  return (
    <>
      <Box boxShadow="md" p="6" rounded="md" bg="gray.700">
        <ChakraTable variant="simple">
          <Thead>
            <Tr>
              <Th>CheckList </Th>
              <Th>META</Th>
              <Th>OBJETIVO</Th>
              <Th>QUANDO</Th>
              <Th isNumeric>CUSTO</Th>
            </Tr>
          </Thead>
          <Tbody>
            {ItemsArray.map((items: ProspItems) => {
              return (
                <>
                  <Tr>
                    <Td>
                      <List>
                        <ListItem key={items.id}>
                          <ListIcon
                            as={MdCropFree}
                            color="green.500"
                            w={7}
                            h={7}
                          />
                        </ListItem>
                      </List>
                    </Td>
                    <Td>{items.title}</Td>

                    <Td>
                      <Text maxW={'20rem'}>{items.objective}</Text>
                    </Td>
                    <Td>{items.when}</Td>
                    <Td isNumeric>{items.cost}</Td>
                  </Tr>
                </>
              )
            })}
          </Tbody>
        </ChakraTable>
      </Box>
    </>
  )
}
