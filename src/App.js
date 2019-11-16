import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Checkout from "./components/Checkout";
import CartItems from "./components/CartItems";
import Coupon from "./components/Coupon";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
