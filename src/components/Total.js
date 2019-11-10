import React, { Component } from "react";
import "./Total.css";

class Total extends Component {
  render() {
    var total = 341.45;

    return (
      <div className="total">
        <p>Total</p>
        <p>${total}</p>
      </div>
    );
  }
}

export default Total;
