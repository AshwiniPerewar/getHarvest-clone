import axios from "axios"
import * as types from "./actionTypes"
const getRequestExpense =()=>{
    return{
        type: types.GET_EXPENSE_REQUEST
    }
}

const getExpense = () => ( dispatch )=>{
    dispatch(getRequestExpense())
    return axios.get("http://localhost:8080/expenses")
    .then((res)=>{

        return dispatch({type: types.GET_EXPENSE_SUCCESS, payload: res.data})
    })
    .catch((err)=>{
        return dispatch({type: types.GET_EXPENSE_FAILURE})
    })

}


const deleteExpenseRequest = () => {
    return { type: types.DELETE_EXPENSE_REQUEST }
}
const deleteExpense = (id) => (dispatch) => {
    dispatch(deleteExpenseRequest())
    return axios.delete(`http://localhost:8080/expenses/${id}`).then((r) => {
        return dispatch({ type: types.DELETE_EXPENSE_SUCCESS })
    }).catch((e) => {
        return dispatch({ type: types.DELETE_EXPENSE_FAILURE })
    })
}


const editExpenseRequest = () => {
    return { type: types.EDIT_EXPENSE_REQUEST }
}
const editExpense = (data) => (dispatch) => {
    console.log(data)
    dispatch(editExpenseRequest())
    return axios.put(`http://localhost:8080/expenses/${data.id}`, {
        "date":data.date,
       "project":data.project,
       "category":data.category,
       "notes":data.notes,
       "amount":data.amount
    }).then((r) => {
        return dispatch({ type: types.EDIT_EXPENSE_SUCCESS })
    }).catch((e) => {
        return dispatch({ type: types.EDIT_EXPENSE_FAILURE })
    })


}



const addExpenseRequest = () => {
    return { type: types.ADD_EXPENSE_REQUEST }
}
const addExpense = (data) => (dispatch) => {
    console.log(data)
    dispatch(addExpenseRequest())
    return axios.post(`http://localhost:8080/expenses`, {
        "date":data.date,
        "project":data.project,
        "category":data.category,
        "notes":data.notes,
        "amount":data.amount
    }).then((r) => {
        return dispatch({ type: types.ADD_EXPENSE_SUCCESS})
    }).catch((e) => {
        return dispatch({ type: types.ADD_EXPENSE_FAILURE })
    })
}

export {getExpense,addExpense,editExpense,deleteExpense}
