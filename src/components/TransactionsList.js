import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
  Button,
  Switch,
  FormControl,
  FormControlLabel,
  TextField
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../redux/reducers/transactionsSlice";
import { addCategory } from "../redux/reducers/categoriesSlice";

const TransactionsList = () => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteTransaction = (id) => {
    dispatch(deleteTransaction(id));
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleAddCategory = (text) => {
    dispatch(addCategory({name: text}));
  }

  return (
    <div className="transactionList">
      <h2>Your Transactions</h2>
      <List className="list">
        {transactions.map((transaction) => {
          return (
            <ListItem
              key={transaction.id}
              className={transaction.type === "income" ? "income" : "expense"}
            >
              <ListItemText
                primary={transaction.text}
                secondary={`${transaction.category} | ${transaction.amount} | ${transaction.date}`}
              />
              <IconButton
                aria-label="delete"
                onClick={() => handleDeleteTransaction(transaction.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          );
        })}
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              navigate("/add-expense");
            }}
          >
            Go back
          </Button>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormControlLabel
              control={
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Add new transaction category"
            ></FormControlLabel>
          </FormControl>
        </Grid>
        {checked && (
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                label="Enter Category"
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
            </FormControl>
          </Grid>
        )}
        {checked && (
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => handleAddCategory(text)}
            >
              Add Category
            </Button>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default TransactionsList;
