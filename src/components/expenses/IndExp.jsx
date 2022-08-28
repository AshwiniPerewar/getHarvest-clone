import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteExpense, getExpense } from '../../store/expenseReducer/action'
import { EditExpense } from './EditExpense'

const IndExp = ({data}) => {    
  const dispatch=useDispatch()
  const [edit, setedit] = useState(false)
  const x = useSelector((state)=> state);

console.log(x);
    const handleDelete=()=>{
        dispatch(deleteExpense(data.id))
    }

    useEffect(()=> {
      dispatch(getExpense());
    }, [dispatch])

  return (
    <Flex justifyContent="space-around" borderBottom="1px solid black">
      <Box>
        <Text bgColor='#fff' h='50'>{data.date} </Text>
      </Box>
        <Box marginLeft="5px" justifyContent="space-around">
        <Text fontWeight="600" fontSize='20'>Example Project</Text>
        <Flex  gap="10"justifyContent="space-between"  bgColor='#fff' h='50'  fontSize='20' > 
          <Box>{data.project}</Box>
          <Box>{ data.category}</Box>
          <Box>{ data.notes}</Box>
        </Flex>

        </Box>
       
       <Box fontSize='20' fontWeight="800">
       
        ${data.amount}
          {
            edit&&<EditExpense data={data} />
          }
        </Box>
        <Box  >
        <Button onClick={()=>setedit(!edit)} >{edit ?"Close":"Edit"}</Button>
        <Button onClick={handleDelete} >Delete</Button>
        </Box>

            </Flex >
    
  )
}

export default IndExp