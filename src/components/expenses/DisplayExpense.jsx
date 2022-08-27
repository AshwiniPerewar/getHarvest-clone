import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import styles from "./Expense.module.css";

import { EditExpense } from "./EditExpense";
import { editPop } from "../../Redux/Expenses/action";


export const DisplayExpense = () => {

  const [edit] = useState(false);
  const dispatch = useDispatch();
  const handleEdit = (id) => {
    const editor = editPop(id);
    dispatch(editor);
  };

  const expenseList = useSelector((state) => state.expenseList);
  return (
    <>
      <div className={styles.line}></div>
      {expenseList?.map((items) => (
        <div className={styles.ExpenseList} key={items.id}>
          {items.status ? (
            <EditExpense handleEdit={handleEdit} edit={edit} items={items} />
          ) : (
            <tr className={styles.TableList}>
              <td className={styles.coldate}>{items.date}</td>
              <td className={styles.colmeta} style={{ width: "600px" }}>
              
                <strong className={styles.strong} style={{ marginLeft: "5px" }}>
                  {items.projectName}
                </strong>
              
                <span>{"(" + `${items.category}` + ")"}</span>
                <div className={styles.ExpenseNotes} style={{ margin: "10px" }}>
                  <span className={styles.BillClass}>
                    {items.billable ? "Billable" : ""}
                  </span>
                  <span className={styles.Notes}>{items.notes}</span>
                </div>
              </td>
              <td className={styles.amountList}>
             <strong className={styles.strong}>
                  {" "}
                  {"$" + `${items.amount}`}
                </strong>
              </td>
              <td className={styles.editbtn}>
                <button
                  onClick={() => handleEdit(items.id)}
                  className={styles.editbtn1}
                >
                </button>
              </td>
            </tr>
          )}
        </div>
      ))}
    </>
  );
};

