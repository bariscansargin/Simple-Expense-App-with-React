import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ submitHandler }) => {
  const [clickedCreate, setClickedCreate] = useState(false);
  const dataToApp = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    submitHandler(expenseData);
  };
  const createHandler = () => {
    setClickedCreate(true);
  };
  const cancelHandler = () => {
    setClickedCreate(false);
  };

  return (
    <div className="new-expense">
      {clickedCreate ? (
        <ExpenseForm saveExpressData={dataToApp} onCancel={cancelHandler} />
      ) : (
        <button onClick={createHandler}>Create New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
