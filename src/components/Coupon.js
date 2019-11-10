import React, { Component } from "react";
import "./Coupon.css";
import Input from "./Input";

class Coupon extends Component {
  applyDiscount = () => {
    console.log("discount applied");
  };

  render() {
    return (
      <div className="coupon">
        <h2>Enter Discount Code</h2>
        <Input placeholder="REACT" />
        <div onClick={this.applyDiscount}>
          <Input name="discount-button" type="submit" value="APPLY DISCOUNT" />
        </div>
      </div>
    );
  }
}

export default Coupon;
