import "./App.scss";
import { PageWelcome } from "../common/components/PageWelcome";
import { PageBooks } from "../common/components/PageBooks";
import { PageCart } from "../common/components/PageCart";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Personal Site</h1>
      <hr />
      <NavLink to="/welcome">Welcome</NavLink> |{" "}
      <NavLink to="/books">Books</NavLink> | <NavLink to="/cart">Cart</NavLink>
      <hr />
      <Routes>
        <Route path="/welcome" element={<PageWelcome />} />
        <Route path="/books" element={<PageBooks />} />
        <Route path="/cart" element={<PageCart />} />
        <Route path="/" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </div>
  );
}

export default App;
