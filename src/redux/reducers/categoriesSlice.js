import { createSlice } from "@reduxjs/toolkit";

const initialCategoriesState = [
  { name: "Grocery" },
  { name: "Salary" },
  { name: "Rent" },
  { name: "Miscellaneous" },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialCategoriesState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
