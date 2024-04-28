import { createSlice } from "@reduxjs/toolkit";

const transactionArr = [];

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: transactionArr,
  reducers: {
    addTransaction: (state, action) => {
      state.push(action.payload);
    },
    deleteTransaction: (state, action) => {
      return state.filter((transaction) => transaction.id !== action.payload);
    },
    getTransactions: (state, action) => {
      return action.payload;
    },
  },
});

export const { addTransaction, deleteTransaction, getTransactions } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;

// export const transactions = (state) => state.transactions;
