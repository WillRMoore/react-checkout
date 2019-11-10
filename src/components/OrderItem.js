import React, { Component } from "react";
import "./OrderItem.css";

class OrderItem extends Component {
  render() {
    return (
      <div className="order-item" type={this.props.type}>
        <p>{this.props.orderItemTitle}</p>
        <p>{this.props.orderItemValue}</p>
      </div>
    );
  }
}

export default OrderItem;
