import React, { Component } from "react";
import "./OrderSummary.css";

class OrderSummary extends Component {
  render() {
    return (
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div></div>
        <div>Discount</div>
        <div>Subtotal</div>
        <div>Tax</div>
        <div>Total</div>
      </div>
    );
  }
}

export default OrderSummary;
