import React from "react";
import { useSelector } from "react-redux";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const Categories = ({ updateCategory, categoryValue }) => {
  const expenseCategories = useSelector((state) => state.categories);
  return (
    <div>
      <FormControl sx={{ m: 2, minWidth: 350 }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={categoryValue}
          label="category"
          onChange={updateCategory}
        >
          {expenseCategories.map((category, id) => (
            <MenuItem key={id} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Categories;
