import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          category={expense.category}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
