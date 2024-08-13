import React from 'react';

const ExpenseSummary = ({ expenses, month }) => {
  // Helper function to format the year for comparison
  const formatYear = (date) => {
    const d = new Date(date);
    return d.getFullYear(); // Get the year from the date
  };

  // Helper function to format the month for comparison
 /* const formatMonth = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${d.getMonth() + 1}`; // Format: YYYY-M
  };*/

  // Get the current year
  const currentYear = new Date().getFullYear();
  //const currentMonth=new Date().getMonth();

  // Calculate total amount spent in the year
  const totalAmountInYear = expenses
    .filter(expense => formatYear(expense.date) === currentYear)
    .reduce((acc, expense) => acc + expense.amount, 0);

  // Calculate amount spent in the given month
 /*const amountSpentInMonth = expenses
    .filter(expense => formatMonth(expense.date) === month)
    .reduce((acc, expense) => acc + expense.amount, 0); */

  return (
    <div className="summary-container">
      <h3>Total Amount Spent in this month: ₹{totalAmountInYear.toFixed(2)}</h3>
      {/*<h3>Amount spent in {currentMonth}th month: ₹{amountSpentInMonth.toFixed(2)}</h3>*/}
    </div>
  );
};

export default ExpenseSummary;
