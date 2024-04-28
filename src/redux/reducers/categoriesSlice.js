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
    // updateCategory: (state, action) => {
    //   const index = state.findIndex(
    //     (category) => category.id === action.payload.id
    //   );
    //   if (index !== -1) {
    //     state[index] = action.payload;
    //   }
    // },
  },
});

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
