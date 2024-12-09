import React from "react";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Menu from "./components/Menu";
import OrderTracking from "./components/OrderTracking";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navigation Header */}
        <header>
          <h1>Canteen Ordering System</h1>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Menu</Link>
              </li>
              <li>
                <Link to="/Cart">Cart</Link>
              </li>
              <li>
                <Link to="/OrderTracking">Order Tracking</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Page Content */}
        <div className="">
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/OrderTracking" element={<OrderTracking />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>

          {/* Footer */}
          <footer className="App-footer">
            <p>&copy; 2024 Canteen Ordering System</p>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}
