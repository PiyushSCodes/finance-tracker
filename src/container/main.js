import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTransaction from "../components/AddTransaction";
import Balance from "../components/Balance";
import { addTransaction } from "../redux/reducers/transactionsSlice";

const Main = () => {
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  const handleAddTransaction = (transaction) => {
    dispatch(addTransaction(transaction));
  };

  return (
    <div>
      <Balance transactions={transactions} />
      <AddTransaction
        addTransaction={handleAddTransaction}
        transactions={transactions}
        id={new Date().getTime()}
      />
    </div>
  );
};

export default Main;
