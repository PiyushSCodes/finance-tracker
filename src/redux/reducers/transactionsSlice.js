import { createSlice } from "@reduxjs/toolkit";

const transactions =
  JSON.parse(localStorage.getItem("transactionsState")) || [];

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: transactions,
  reducers: {
    // To add transactions in store
    addTransaction: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("transactionsState", JSON.stringify(state));
    },
    // To delete transactions
    deleteTransaction: (state, action) => {
      const updatedState = state.filter(
        (transaction) => transaction.id !== action.payload
      );
      state = updatedState;
      localStorage.setItem("transactionsState", JSON.stringify(state));
      return state;
    },
  },
});

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
