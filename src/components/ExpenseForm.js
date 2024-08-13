import React, { useState } from 'react';

const categories = ['Food', 'Entertainment', 'Utilities', 'Transportation', 'Others','Select a Category'];

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState(categories[5]);

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title,
      amount: parseFloat(amount),
      date: new Date(date),
      category,
    };
    onAddExpense(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
    setCategory(categories[5]);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
