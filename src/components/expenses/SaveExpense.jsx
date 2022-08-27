import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { addExpense, savedExpense } from "../../Redux/Expenses/action";
import styles from "./Expense.module.css";

const initvalue = {
  date: new Date().toLocaleDateString(),
  projectName: "",
  category: "Entertainment",
  notes: "",
  billable: true,
  amount: "",
};
export const SaveExpense = ({ handleButton }) => {
  const projectNames = ["Cloning", "Harvest", "Masai"];
  const categories = [
    "Entertainment",
    "Lodging",
    "Meals",
    "Mileage",
    "Other",
    "Transportation",
  ];
  const [formState, setFormState] = useState(initvalue);
  const { date, notes, billable, amount } = formState;

  const expenseList = useSelector((state) => state.expense.expenseList);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.expense.isLoading);
  const isError = useSelector((state) => state.expense.isError);
  //const userID = useSelector(state => state.auth.uid)
  const userID = useSelector((state) => state.auth.uid);
  const [clientObj,setClientObj]=useState([]);
  const ProjectDet = () => {
   
    axios.get(`https://c2ec8.sse.codesandbox.io/harvest?userId=${userID}`)
      .then((res) => { 
        
        console.log(res.data);
        setClientObj(res.data);
      
      })
      .catch((er) => console.log(er));
   
   
  };
  useEffect(()=>{
    ProjectDet();
  },[])




  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let val = type === "checkbox" ? checked : value;
    setFormState({ ...formState, [name]: val });
  };

  const handleSubmit = () => {
    setFormState({ ...formState, id: uuid(), status: false });
    const addexpenseaction = addExpense(formState);
    dispatch(addexpenseaction);
    console.log(expenseList);
    const upLoad = savedExpense(formState, userID);
    dispatch(upLoad);

  };
 
  return (
    <>
      {/* <button onClick={handleButton}>Change</button> */}
      <div className={styles.ExpenssForm}>
        <div className={styles.DateClass}>
          <p style={{ color: "#626262", background: "#f4f4f4" }}>Date</p>
          <input
            type="date"
            value={date}
            onChange={handleChange}
            name="date"
            className={(styles.dateInput, styles.input)}
          />
        </div>
        <div style={{ background: "#f4f4f4", width: "400px", margin: "10px" }}>
          <p style={{ color: "#626262", background: "#f4f4f4" }}>
            Project/Category
          </p>
          {/* <option value=""></option> */}
          <select
          
            placeholder="Choose a project..."
            name="projectName"
            onChange={handleChange}
            className={styles.ProjectSelection}
          >
            <option value="" >
              Choose a project...
            </option>
            
            {clientObj?.map((item)=>
                                <option value={item.pname} >{item.pname}</option>)}
          </select>
          <br></br>
          <select
            placeholder="Choose a category..."
            name="category"
            onChange={handleChange}
            className={styles.ProjectSelection}
          >
            {categories?.map((items) => (
              <option key={items} value={items}>
                {items}
              </option>
            ))}
          </select>

          <div style={{ marginTop: "10px", height: "60px" }}>
            <textarea
              type="text"
              placeholder="Notes(optional)"
              value={notes}
              name="notes"
              onChange={handleChange}
              className={styles.NotesInputbox}
            ></textarea>
          </div>
          
          <p>
            <input
              type="checkbox"
              checked={billable}
              name="billable"
              onChange={handleChange}
            />{" "}
            <span>This Expense is Billable</span>
          </p>
          <button onClick={handleSubmit} className={styles.Expensebtn}>
            Save Expense
          </button>
          <button onClick={handleButton} className={styles.cancelBtn}>
            Cancel
          </button>
          <span>{isLoading ? "...Loading" : ""}</span>
        </div>
        <div style={{ background: "#f4f4f4" }}>
          <p style={{ color: "#626262", background: "#f4f4f4" }}>Amount</p>
          <div className={styles.amountbox}>
            $
            <input
              type="text"
              value={amount}
              name="amount"
              onChange={handleChange}
              className={(styles.input, styles.inputamount)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

