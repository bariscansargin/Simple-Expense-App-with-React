import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";

import "./App.css";

function App() {
  const [expenseList, setExpenseList] = useState([]);
  const saveExpenseData = (expenseData) => {
    return setExpenseList((prevList) => {
      return [expenseData, ...prevList];
    });
  };
  

  return (
    <div>
      <NewExpense submitHandler={saveExpenseData} />
      <Expenses expenses={expenseList} />
    </div>
  );
}
export default App;
