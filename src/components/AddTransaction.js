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

export default function AddTransactions({ id, addTransaction, transactions }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: id,
      text: text,
      amount: amount,
      date: date,
      type: type,
    };
    addTransaction(newTransaction);
    setText("");
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

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h3>Total Balance</h3>
          <h1>₹{total}</h1>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Text"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              type="number"
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
                control={<Radio required="true"/>}
                label="Income"
              />
              <FormControlLabel
                value="expense"
                control={<Radio required="true"/>}
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
}
