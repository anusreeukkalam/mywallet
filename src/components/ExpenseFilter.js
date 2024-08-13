// src/components/ExpenseFilter.js
import React, { useState } from 'react';

const ExpenseFilter = ({ onFilterChange }) => {
  const [month, setMonth] = useState(new Date().getMonth() + 1); 

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div className="filter-container">
      <label>Filter by Month</label>
      <input
        type="number"
        value={month}
        onChange={handleMonthChange}
        min="1"
        max="12"
      />
    </div>
  );
};

export default ExpenseFilter;
