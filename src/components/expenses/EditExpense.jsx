import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addExpense, editExpense, getExpense } from '../../store/expenseReducer/action'
 import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box, Button,  Checkbox, Flex, Input, Text } from '@chakra-ui/react'

export const EditExpense = ({data}) => {
    const dispatch=useDispatch()
    
    const [category, setcategery] = useState("")
    const [date, setdate] = useState("")
    const [amount, setamount] = useState("")
    const [notes, setnotes] = useState("")
    const [project, setproject] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    
    useEffect(() => {
      if(data){
        setamount(data.amount)
        setdate(data.date)
        setcategery(data.category)
        setnotes(data.notes)
        setproject(data.project)
      }
    }, [])
    

    const handleEdit=()=>{
        let id=data.id
         let datan={
            date,category,amount,project,notes,id
         }
         dispatch(editExpense(datan))       
    }

  return (
    // <div>
    //     date
    //     <Input value={date} onChange={(e)=>setdate(e.target.value)} type="text" />
    //     amount
    //     <Input value={amount} onChange={(e)=>setamount(e.target.value)} type="number" />
    //     cat
    //     <Input value={category} onChange={(e)=>setcategery(e.target.value)} type="text" />
    //     pro
    //     <Input value={project} onChange={(e)=>setproject(e.target.value)} type="text" />
    //     not
    //     <Input value={notes} onChange={(e)=>setnotes(e.target.value)} type="text" />
    //     <Button onClick={handleEdit}>Edit</Button>
    // </div>
    <Flex justify='space-between' border='1px solid #fa5d00' mt='18' p='5' bgColor='#fff8f1'>
    <Box>
      <Text fontSize='30'>Date</Text>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
    </Box>

    <Flex flexDir='column' w='70%' gap='5'>
      <Text fontSize='30' fontWeight="400">Project /category</Text>
      <Input bgColor='#fff' h='50' value={category} onChange={(e)=>setcategery(e.target.value)} type="text" placeholder='Choose a Project...'/>
  
      <Input bgColor='#fff' h='50' value={project} onChange={(e)=>setproject(e.target.value)} type="text"placeholder='Choose a Category...' />
  
      <Input bgColor='#fff' h='50' value={notes} onChange={(e)=>setnotes(e.target.value)} type="text" placeholder='Notes (optional)'/>
     <Input bgColor='#fff' type='file' placeholder='Attach receipt' />
     <Checkbox defaultChecked>This expense is billable</Checkbox>
     <Flex gap='5'>
        <Button w='60%' variant='green' bgColor='green' color='#fff' fontSize='20' p='18' borderRadius="5"  onClick={handleEdit}>Update Expense</Button>
          <Button w='20%' variant='outline'  fontSize='20' p='20px' onClick=''>Cancel</Button>
     </Flex>
    </Flex>

    <Box>
      <Text fontSize='30'>Amount</Text>
       <Input bgColor='#fff' value={amount} onChange={(e)=>setamount(e.target.value)} placeholder="$" type="number" />
    </Box>

  </Flex>
  )
}
