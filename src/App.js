// src/App.js
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseSummary from './components/ExpenseSummary';
import './index.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filteredMonth, setFilteredMonth] = useState(new Date().getMonth() + 1); // Months are 0-indexed so add 1

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...expense, id: Math.random().toString() },
    ]);
  };

  const filterChangeHandler = (month) => {
    setFilteredMonth(month);
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.date.getMonth() + 1 === parseInt(filteredMonth) // Adjust for 0-indexed months so add 1 to range from 1 to 12
  );

  return (
    <div className="App">
      <h1>Personal Finance Manager</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseFilter onFilterChange={filterChangeHandler} />
      <ExpenseSummary expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
};

export default App;
