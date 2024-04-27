import React from "react";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TransactionsList({
  transactions,
  deleteTransaction,
}) {
  return (
    transactions.length > 0 && (
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
                  secondary={`${transaction.amount} | ${transaction.date}`}
                />
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            );
          })}
        </List>
      </div>
    )
  );
}
