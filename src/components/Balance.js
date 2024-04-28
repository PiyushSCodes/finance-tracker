import React from "react";

const Balance = ({ transactions }) => {
  const amount = transactions.map((transaction) =>
    transaction.type === "expense"
      ? Number(-transaction.amount) //Number is a constructor function in javascript that converts the value to number type
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

export default Balance;
