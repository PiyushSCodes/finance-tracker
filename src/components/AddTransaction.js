import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from "@mui/material";
import Categories from "./Categories";
import { useNavigate } from "react-router-dom";

const AddTransactions = ({ id, addTransaction, transactions }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: id,
      category: category,
      amount: amount,
      date: date,
      type: type,
    };
    addTransaction(newTransaction);
    setCategory("");
    setAmount("");
    setDate("");
    setType("");
  };
  const totalAmount = transactions.map((transaction) =>
    transaction.type === "expense"
      ? Number(-transaction.amount)
      : Number(transaction.amount)
  );
  const total = totalAmount.reduce((acc, item) => acc + item, 0);

  const handleUpdateCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h3>Total Balance</h3>
          <h1>₹{total}</h1>
        </Grid>
        {transactions.length > 0 && (
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                navigate("/show-transactions");
              }}
            >
              View all transactions
            </Button>
          </Grid>
        )}
        <Categories category={category} updateCategory={handleUpdateCategory} />
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              type="number"
              required={true}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              required={true}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel>Select the type of transaction!</FormLabel>
            <RadioGroup
              row
              aria-label="transaction-type"
              name="transaction-type"
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <FormControlLabel
                value="income"
                control={<Radio required={true} />}
                label="Income"
              />
              <FormControlLabel
                value="expense"
                control={<Radio required={true} />}
                label="Expense"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Transaction
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddTransactions;
