import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout">Checkout</Route>
          <Route path="/login">Login</Route>
          <Route path="/">
            <Route index element={<Header />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
