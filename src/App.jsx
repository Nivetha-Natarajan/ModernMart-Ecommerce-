import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./component/Homepage";
import Menpage from "./component/Menpage";
import Womenpage from "./component/Womenpage";
import Cart from "./component/Cart";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
  <h1 className="logo">ModernMart</h1>

  <nav>
    <ul className="nav-links">
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/men">Men</Link>
      </li>

      <li>
        <Link to="/women">Women</Link>
      </li>

      <li>
        <Link to="/cart">Cart</Link>
      </li>
    </ul>
  </nav>
</header>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/men" element={<Menpage />} />
<Route path="/women" element={<Womenpage />} />
<Route path="/cart" element={<Cart />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;