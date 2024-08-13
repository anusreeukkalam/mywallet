// src/components/ExpenseItem.js
import React from 'react';

const ExpenseItem = ({ title, amount, date, category }) => {
  return (
    <div className="expense-item">
      <h2>{title}</h2>
      <p>Amount: ₹{amount.toFixed(2)}</p>
      <p>Date: {date.toDateString()}</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default ExpenseItem;
