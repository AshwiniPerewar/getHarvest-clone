import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpense, getExpense } from '../../store/expenseReducer/action'

export const AddExpense = () => {
    const dispatch=useDispatch()
    
    const [category, setcategery] = useState("")
    const [date, setdate] = useState("")
    const [amount, setamount] = useState("")
    const [notes, setnotes] = useState("")
    const [project, setproject] = useState("")
    const handleAdd=()=>{
        const data={
            date,amount,notes,project,category
        }
        dispatch(addExpense(data))
        setdate("")
        setamount("")
        setnotes("")
        setcategery("")
        setproject("")
        

    }
  return (
    <div>
        date
        <Input value={date} onChange={(e)=>setdate(e.target.value)} type="text" />
        amount
        <Input value={amount} onChange={(e)=>setamount(e.target.value)} type="number" />
        cat
        <Input value={category} onChange={(e)=>setcategery(e.target.value)} type="text" />
        pro
        <Input value={project} onChange={(e)=>setproject(e.target.value)} type="text" />
        not
        <Input value={notes} onChange={(e)=>setnotes(e.target.value)} type="text" />
        <Button onClick={handleAdd}>Submit</Button>
    </div>
  )
}
