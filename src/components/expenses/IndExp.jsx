import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteExpense, getExpense } from '../../store/expenseReducer/action'
import { EditExpense } from './EditExpense'

const IndExp = ({data}) => {
    
    const dispatch=useDispatch()
  const [edit, setedit] = useState(false)
    const handleDelete=()=>{
        dispatch(deleteExpense(data.id))
    }
  return (
    <div>
        {data.amount}
{data.date}
       { data.category}
       { data.notes}
{data.project}
{
    edit&&<EditExpense data={data} />
}
<Button onClick={()=>setedit(!edit)} >{edit ?"Close":"Edit"}</Button>
<Button onClick={handleDelete} >Delete</Button>
    </div>
  )
}

export default IndExp