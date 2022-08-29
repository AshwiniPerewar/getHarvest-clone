import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddExpense } from "../../components/expenses/AddExpense";
import IndExp from "../../components/expenses/IndExp";
import { getExpense } from "../../store/expenseReducer/action";
import { Box, Button, Text } from "@chakra-ui/react";
import { GrFormAdd } from "react-icons/gr";
import { ProtectedNavbar } from "../../components/protectedComponents/protectedNavbar/ProtectedNavbar";

export const Expenses = () => {
  const [add, setadd] = useState(false);
  const ExpensesData = useSelector((store) => store.expenses.expense);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExpense());
  }, [ExpensesData]);

  return (
    <Box>
      <ProtectedNavbar/>
      <Box w="80%" m="auto" bgColor="">
        <Text fontSize={60}>Expenses</Text>
        <Button
          variant={"green"}
          bgColor={"green"}
          color="#fff"
          onClick={() => setadd(!add)}
        >
          + Track Expenses
        </Button>

        {add && <AddExpense />}

        {ExpensesData &&
          ExpensesData.map((ele) => <IndExp key={ele.id} data={ele} />)}
      </Box>
    </Box>
  );
};

// Expenses all functionality updated
