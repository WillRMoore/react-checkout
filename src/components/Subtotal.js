import React, { Component } from "react";
import "./Subtotal.css";

class Subtotal extends Component {
  calculateSubtotal = () => {
    //
  }

  render() {
    var subtotal = 335;
    return (
      <div className="subtotal">
        <p>Subtotal</p>
        <p>${subtotal}</p>
      </div>
    );
  }
}

export default Subtotal;
