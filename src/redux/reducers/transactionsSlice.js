import { createSlice } from "@reduxjs/toolkit";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: [],
  reducers: {
    addTransaction: (state, action) => {
      state.push(action.payload);
    },
    // updateTransaction: (state, action) => {
    //   const { id, updatedTransaction } = action.payload;
    //   const index = state.findIndex((transaction) => transaction.id === id);
    //   if (index !== -1) {
    //     state[index] = updatedTransaction;
    //   }
    // },
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
