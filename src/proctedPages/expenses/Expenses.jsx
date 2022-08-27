import React from 'react'
import { DisplayExpense } from '../../components/expenses/DisplayExpense';
import { EditExpense } from '../../components/expenses/EditExpense';
import { SaveExpense } from '../../components/expenses/SaveExpense';

export const Expenses = () => {
  return (
    <div>
      <DisplayExpense />
      <EditExpense />
      <Expenses />
      <SaveExpense/>
    </div>
  )
};
