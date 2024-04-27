import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../reducers/transactionsSlice";
import categoriesReducer from "../reducers/categoriesSlice";

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    categories: categoriesReducer,
  },
});

export default store;
