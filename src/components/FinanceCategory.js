import React from "react";

const IncomeCategory = ({ transactions }) => {
  const amount = transactions.map((transaction) =>
    transaction.type === "expense"
      ? Number(-transaction.amount)
      : Number(transaction.amount)
  );
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0);
  const expenses = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0);
  return (
    <div className="expense-container">
      <div>
        <h4>Income</h4>
        <p className="income">+₹{income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="expense">₹{expenses}</p>
      </div>
    </div>
  );
};

export default IncomeCategory;
