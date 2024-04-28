import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import TransactionsList from "./components/TransactionsList";
import Main from "./container/main";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/add-expense" element={<Main />}></Route>
          <Route path="/show-transactions" element={<TransactionsList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
