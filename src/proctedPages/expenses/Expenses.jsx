import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddExpense } from '../../components/expenses/AddExpense';
import IndExp from '../../components/expenses/IndExp';
import { getExpense } from '../../store/expenseReducer/action';

export const Expenses = () => {
  const [add, setadd] = useState(false)
  const ExpensesData = useSelector((store)=> store.expenses.expense)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExpense())
  
  }, [ExpensesData])
  return (
    <div>
      <Button onClick={()=>setadd(!add)} >Add Exp</Button>
      {
        add&& <AddExpense/>
      }
      {
        ExpensesData && ExpensesData.map((ele)=><IndExp key={ele.id} data={ele} />)
      }
    </div>
  )
};
