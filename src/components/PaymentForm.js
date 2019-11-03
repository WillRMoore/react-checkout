import React, { Component } from "react";
import "./PaymentForm.css";
import Input from "./Input";

class PaymentForm extends Component {
  render() {
    return (
      <div className="payment-form">
        <h2>Payment Information</h2>
        <form>
          <Input
            type="text"
            name="name"
            placeholder="John Doe"
            label="NAME ON CREDIT CARD"
          />
          <Input
            type="number"
            name="card-number"
            placeholder="0000 0000 0000 0000"
            label="CREDIT CARD NUMBER"
          />
        </form>
      </div>
    );
  }
}

export default PaymentForm;
