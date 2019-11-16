import React, { Component } from "react";
import "./Tax.css";
import { connect } from "react-redux";
import { calculateTax } from "../actions/postActions";

class Tax extends Component {
  componentDidMount() {
    console.log("Tax.js Mounted");
  }

  componentWillReceiveProps(stateChanged) {
    // if (stateChanged.subTotal) {
    //   console.log("subTotal updated in Tax component");
    //   this.props.calculateTax({
    //     taxRate: this.props.taxRate,
    //     subTotal: stateChanged.subTotal
    //   });
    // }
    // else if (stateChanged.cartItems) {
    //   console.log("cartItems updated in Tax component");
    //   this.props.calculateTax({
    //     taxRate: this.props.taxRate,
    //     subTotal: this.props.subTotal
    //   });
    // }
  }

  // calculateTaxes = (taxRate, subtotal) => {
  //   var tax = (subtotal * taxRate).toFixed(2);

  //   // update subtotal
  //   var subTotal = Number(subtotal) + Number(tax);

  //   console.log("tax:", tax);
  //   console.log("Updated subtotal:", subTotal);
  //   return tax;
  // };

  render() {
    return (
      <div className="tax">
        <p>Tax</p>
        <p>${this.props.tax}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tax: state.store.tax,
  taxRate: state.store.taxRate,
  subTotal: state.store.subTotal,
  cartItems: state.store.cartItems
});

export default connect(mapStateToProps, { calculateTax })(Tax);
