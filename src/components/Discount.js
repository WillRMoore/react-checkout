import React, { Component } from "react";
import "./Discount.css";

class Discount extends Component {
  calculateDiscount = (subtotal, discountPercent) => {
    var discount = Math.round(subtotal * discountPercent);
    var newSubtotal = 335 + 23.45;

    // update 'total' amount value in redux store
    var total = Number(newSubtotal) - Number(discount);

    console.log("discount:", discount);
    console.log("total:", total);
    return discount;
  };

  render() {
    var discount = this.calculateDiscount(335, 0.05);

    return (
      <div className="discount">
        <p>Discount</p>
        <p>${discount}</p>
      </div>
    );
  }
}

export default Discount;
