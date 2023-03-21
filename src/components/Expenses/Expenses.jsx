import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import ExpensesList from "./ExpensesList.jsx";


const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          saveChangedYear={filterChangeHandler}
        />

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
