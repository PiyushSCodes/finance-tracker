import { createSlice } from "@reduxjs/toolkit";

const transactions =
  JSON.parse(localStorage.getItem("transactionsState")) || [];

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: transactions,
  reducers: {
    addTransaction: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("transactionsState", JSON.stringify(state));
    },
    deleteTransaction: (state, action) => {
      const updateState = state.filter(
        (transaction) => transaction.id !== action.payload
      );
      state = updateState;
      localStorage.setItem("transactionsState", JSON.stringify(state));
      return state;
    },
  },
});

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
