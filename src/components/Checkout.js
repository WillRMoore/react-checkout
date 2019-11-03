import React, { Component } from "react";
import "./Checkout.css";
import OrderSummary from "./OrderSummary";
import PaymentForm from "./PaymentForm";

class Checkout extends Component {
  render() {
    return (
      <div className="checkout">
        <OrderSummary />
        <PaymentForm />
      </div>
    );
  }
}

export default Checkout;
