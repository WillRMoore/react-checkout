import React, { Component } from "react";
import "./Discount.css";
import { connect } from "react-redux";
import { recalculateDiscount } from "../actions/postActions";

class Discount extends Component {
  componentWillReceiveProps(stateChanged) {
    if (stateChanged.subTotal && this.props.discount.amount !== 0) {
      console.log("*******");
      console.log("Re-calculating Discount");
      console.log("*******");

      this.props.recalculateDiscount({
        subTotal: stateChanged.subTotal,
        discount: this.props.discount
      });
    }
  }

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
    return (
      <div className="discount">
        <p>Discount</p>
        <p>${this.props.discount.amount}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subTotal: state.store.subTotal,
  discount: state.store.discount
});

export default connect(mapStateToProps, { recalculateDiscount })(Discount);
