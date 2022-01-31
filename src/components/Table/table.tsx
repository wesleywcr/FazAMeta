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
  ListItem
} from '@chakra-ui/react'
import { ListContext } from 'context/list'
import { parseCookies } from 'nookies'
import { useContext } from 'react'
import { MdCropFree } from 'react-icons/md'

type ProspItems = {
  id: number
  title: string
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
              <Th>META</Th>
              <Th>OBJETIVO</Th>
              <Th>QUANDO</Th>
              <Th isNumeric>CUSTO</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <List>
                  {ItemsArray.map((items: ProspItems) => {
                    return (
                      <ListItem key={items.id}>
                        <ListIcon
                          as={MdCropFree}
                          color="green.500"
                          w={5}
                          h={5}
                        />
                        <p>{items.title}</p>
                      </ListItem>
                    )
                  })}
                </List>
              </Td>
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
