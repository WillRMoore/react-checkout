import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Checkout from "./components/Checkout";
import CartItems from "./components/CartItems";
import Coupon from "./components/Coupon";

function App() {
  return (
    <div className="App">
      <h1>React Checkout Form</h1>
      <div className="checkout-page-container">
        <div>
          <CartItems />
          <Coupon />
        </div>

        <Checkout />
      </div>
    </div>
  );
}

export default App;
