import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTransaction from "../components/AddTransaction";
import TransactionsList from "../components/TransactionsList";
import FinanceCategory from "../components/FinanceCategory";
import {
  addTransaction,
  deleteTransaction,
} from "../redux/reducers/transactionsSlice";

export default function Main() {
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  const handleAddTransaction = (transaction) => {
    dispatch(addTransaction(transaction));
  };

  const handleDeleteTransaction = (id) => {
    dispatch(deleteTransaction(id));
  };

  return (
    <div>
      <FinanceCategory transactions={transactions} />
      <TransactionsList
        transactions={transactions}
        deleteTransaction={handleDeleteTransaction}
      />
      <AddTransaction
        addTransaction={handleAddTransaction}
        transactions={transactions}
        id={new Date().getTime()}
      />
    </div>
  );
}