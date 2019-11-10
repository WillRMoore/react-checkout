import React, { Component } from "react";
import "./Tax.css";

class Tax extends Component {
  componentDidMount() {
    console.log("Tax.js Mounted");
  }

  calculateTaxes = (taxRate, subtotal) => {
    var tax = (subtotal * taxRate).toFixed(2);

    // update subtotal
    var subTotal = Number(subtotal) + Number(tax);

    console.log("tax:", tax);
    console.log("Updated subtotal:", subTotal);
    return tax;
  };

  render() {
    var tax = this.calculateTaxes(0.07, 335);
    return (
      <div className="tax">
        <p>Tax</p>
        <p>${tax}</p>
      </div>
    );
  }
}

export default Tax;
