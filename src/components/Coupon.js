import React, { Component } from "react";
import "./Coupon.css";
import Input from "./Input";
import { connect } from "react-redux";
import { applyDiscount } from "../actions/postActions";

class Coupon extends Component {
  validateDiscount = () => {
    var discountInput = document.querySelector("#discount-code-input");

    console.log("discount applied");

    if (discountInput.value !== "" && this.props.discount.amount == 0) {
      this.props.applyDiscount({
        discountCodes: this.props.discountCodes,
        subTotal: this.props.subTotal,
        formInput: document.querySelector("#discount-code-input").value
      });

      // clear form
      discountInput.value = "";
    }
  };

  render() {
    return (
      <div className="coupon">
        <h2>Enter Discount Code</h2>
        <Input id="discount-code-input" placeholder="REACT" />
        <div onClick={this.validateDiscount}>
          <Input name="discount-button" type="submit" value="APPLY DISCOUNT" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  discountCodes: state.store.discountCodes,
  subTotal: state.store.subTotal,
  discount: state.store.discount
});

export default connect(mapStateToProps, { applyDiscount })(Coupon);
