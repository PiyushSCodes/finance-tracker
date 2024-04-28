import { createSlice } from "@reduxjs/toolkit";

const initialCategoriesState = JSON.parse(
  localStorage.getItem("categoriesState")
) || [
  { name: "Grocery" },
  { name: "Salary" },
  { name: "Rent" },
  { name: "Other" },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialCategoriesState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("categoriesState", JSON.stringify(state));
    },
  },
});

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
