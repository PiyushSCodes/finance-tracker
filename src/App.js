import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Main from "./container/main";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/tracker" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
