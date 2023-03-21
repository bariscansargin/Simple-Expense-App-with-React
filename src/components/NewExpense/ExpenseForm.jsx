import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ saveExpressData,onCancel }) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    saveExpressData(expenseData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });

    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="enteredTitle"
            value={userInput.enteredTitle}
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="enteredAmount"
            value={userInput.enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="enteredDate"
            value={userInput.enteredDate}
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
