import { Box, Button, Checkbox, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSearch,AiOutlineDown} from "react-icons/ai"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
  import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
export const Project = () => {
  return (
   <Box margin={"auto"}  >
    <Box border="1px solid" height={"5em"} bg="#eeeeee">
    <Box display={"flex"} justifyContent="space-between" mt="1em" paddingLeft={"30px"} paddingRight={"30px"} >
        <Box display={"flex"} gap="2" >
            <Button colorScheme={"green"} >+ New Project</Button>
            <Button color={"black"} bg="white" variant={"outline"}>Import</Button>
            <Button color={"black"} bg="white" variant={"outline"}>Export</Button>
        </Box>
        <Box>
    <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<AiOutlineSearch color='gray.300' />}
    />
    <Input type='tel' bg={"white"} placeholder='Search By Project or Client' width={"25rem"} />
  </InputGroup>
        
        </Box>
    </Box>
    </Box> 
    

    {/* Navover */}

   <Box margin={"auto"} width="90%">
   <Box mt="3%">
        <Text fontWeight={"500"} fontSize={"3xl"}>Projects</Text>
    </Box>
   
<Box display={"flex"} justifyContent="space-between">
<Menu  >
  <MenuButton  as={Button}  color={"black"} bg="white" variant="outline" size={"sm"} rightIcon={<AiOutlineDown />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Active projects</MenuItem>
    <MenuItem>Budgeted project</MenuItem>
    <MenuItem>Archived project</MenuItem>
  </MenuList>
</Menu>
<Box display={"flex"} gap="10px">
<Menu>
<MenuButton as={Button} color={"black"} bg="white" variant="outline" size={"sm"}  rightIcon={<AiOutlineDown />}>
   Filter By Client
  </MenuButton>
  <MenuList>
    <MenuItem>All Client</MenuItem>
    <MenuItem>Active Client</MenuItem>
    <MenuItem>Example Client</MenuItem>
  </MenuList>
</Menu>

<Menu>
<MenuButton as={Button} color={"black"} bg="white" variant="outline" size={"sm"}  rightIcon={<AiOutlineDown />}>
    Filter By manager
  </MenuButton>
  <MenuList>
    <MenuItem>All manager</MenuItem>
    <MenuItem>Active manager of project</MenuItem>
    
  </MenuList>
</Menu>
</Box>
</Box>
   

</Box>

<Box margin="auto" width={"90%"}>
<TableContainer>
  <Table size='sm' variant='striped' color={"black"}  >
    <Thead>
      <Tr>
        <Th>
  <Checkbox size='sm' colorScheme='orange' defaultChecked>
    client
  </Checkbox>
        </Th>
        <Th>Budget</Th>
        <Th >spent</Th>
        <Th >Remaining</Th>
        <Th >Costs</Th>
        
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
            Example Client
        </Td>
        <Td>

        </Td>
        <Td >
            <Input size={"xm"} width="60%"/>
        </Td>
        <Td>
        50.00 (100%)
        </Td>
        <Td display={"flex"} justifyContent="space-between" alignItems={"center"}>
            17.55 $
    <Menu  >
  <MenuButton as={Button} color={"black"} bg="white" variant="outline" size={"sm"}  rightIcon={<AiOutlineDown />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Pin</MenuItem>
    <MenuItem>Dublicate</MenuItem>
    <MenuItem>Archive</MenuItem>
    <MenuItem>Delete</MenuItem>
  </MenuList>
</Menu>
        </Td>
      </Tr>
      <Tr>
        <Td>
 <Checkbox size='sm' colorScheme='orange' defaultChecked>
   Example Project
  </Checkbox>
        </Td>
        <Td>50</Td>
        <Td >0.00</Td>
      </Tr>
      <Tr>
        <Td>client name</Td>
        <Td>50</Td>
        <Td >0.00</Td>
        <Td></Td>
        <Td display={"flex"} justifyContent="space-between" alignItems={"center"}>
        17.55 $
    <Menu  >
  <MenuButton as={Button} color={"black"} bg="white" variant="outline" size={"sm"}  rightIcon={<AiOutlineDown />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Pin</MenuItem>
    <MenuItem>Dublicate</MenuItem>
    <MenuItem>Archive</MenuItem>
    <MenuItem>Delete</MenuItem>
  </MenuList>
</Menu>
        </Td>
      </Tr>
      <Tr>
            <Td>
            <Checkbox size='sm' colorScheme='orange' defaultChecked>
             client name
            </Checkbox>
            </Td>
            <Td></Td>
            <Td></Td>
            <Td>50.00 (100%)</Td>
            <Td display={"flex"} justifyContent="space-between" alignItems={"center"}>
                15.00 $ 

    <Menu  >
  <MenuButton as={Button} color={"black"} bg="white" variant="outline" size={"sm"}  rightIcon={<AiOutlineDown />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Pin</MenuItem>
    <MenuItem>Dublicate</MenuItem>
    <MenuItem>Archive</MenuItem>
    <MenuItem>Delete</MenuItem>
  </MenuList>
</Menu>
            </Td>
      </Tr>

    </Tbody>
    
  </Table>
</TableContainer>
</Box>


   </Box>
  )
}