import React, { Component } from "react";
import "./Subtotal.css";
import { connect } from "react-redux";
import { calculateSubtotal } from "../actions/postActions";

class Subtotal extends Component {
  componentDidMount() {
    console.log("Subtotal component mounted");
    console.log(
      "Subtotal Component has access to cartItems:",
      this.props.cartItems
    );

    this.props.calculateSubtotal({ cartItems: this.props.cartItems });
  }

  render() {
    return (
      <div className="subtotal">
        <p>Subtotal</p>
        <p>${this.props.subTotal}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.store.cartItems,
  subTotal: state.store.subTotal
});

export default connect(mapStateToProps, { calculateSubtotal })(Subtotal);
