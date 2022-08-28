import { Button, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addExpense, editExpense, getExpense } from '../../store/expenseReducer/action'

export const EditExpense = ({data}) => {
    const dispatch=useDispatch()
    
    const [category, setcategery] = useState("")
    const [date, setdate] = useState("")
    const [amount, setamount] = useState("")
    const [notes, setnotes] = useState("")
    const [project, setproject] = useState("")
    
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
        <Button onClick={handleEdit}>Edit</Button>
    </div>
  )
}
