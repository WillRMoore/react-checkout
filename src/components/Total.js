import React, { Component } from "react";
import "./Total.css";
import { connect } from "react-redux";
import { calculateTotal } from "../actions/postActions";

class Total extends Component {
  componentDidMount() {
    console.log("Total.js component mounted");
  }

  componentWillReceiveProps(stateChanged) {
    if (stateChanged.discount) {
      this.props.calculateTotal({
        subTotal: this.props.subTotal,
        tax: this.props.tax,
        discount: stateChanged.discount
      });
    }
    if (stateChanged.discount && stateChanged.subTotal && stateChanged.tax) {
      this.props.calculateTotal({
        subTotal: stateChanged.subTotal,
        tax: stateChanged.tax,
        discount: stateChanged.discount
      });
    }
  }

  render() {
    return (
      <div className="total">
        <p>Total</p>
        <p>${this.props.total.toFixed(2)}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subTotal: state.store.subTotal,
  tax: state.store.tax,
  discount: state.store.discount,
  total: state.store.total
});

export default connect(mapStateToProps, { calculateTotal })(Total);
