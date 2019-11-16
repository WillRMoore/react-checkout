import React, { Component } from "react";
import "./OrderSummary.css";
import OrderItem from "./OrderItem";
import Subtotal from "./Subtotal";
import Tax from "./Tax";
import Discount from "./Discount";
import Total from "./Total";

class OrderSummary extends Component {
  render() {
    return (
      <div className="order-summary">
        <h2 className="order-summary-title">Order Summary</h2>
        <Subtotal />
        <Tax />
        <Discount />
        <Total />
      </div>
    );
  }
}

export default OrderSummary;
