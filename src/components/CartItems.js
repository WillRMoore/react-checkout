import React, { Component } from "react";
import "./CartItems.css";
import { connect } from "react-redux";
import {
  calculateSubtotal,
  removeCartItem,
  recalculateDiscount,
  calculateTax,
  calculateTotal,
  incrementQuantity
} from "../actions/postActions";

class CartItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: this.props.cartItems
    };
  }

  componentDidMount() {
    console.log("CartItems mounted");
  }

  componentWillReceiveProps(stateChanged) {
    if (stateChanged.cartItems) {
      console.log("cartItems changed in CartItems.js Component");
      this.props.calculateSubtotal({ cartItems: stateChanged.cartItems });
    }
    if (stateChanged.subTotal) {
      // && this.props.discount.amount !== 0
      console.log("subTotal state updated in CartItems.js component");

      this.props.calculateTotal({
        subTotal: stateChanged.subTotal,
        tax: this.props.tax,
        discount: this.props.discount
      });

      this.props.calculateTax({
        taxRate: this.props.taxRate,
        subTotal: stateChanged.subTotal
      });
    }
  }

  incrementQuantity = ({ id }) => {
    var productItem = document.querySelector("#quantity" + id);
    var newQuantity = Number(productItem.value) + 1;
    var products = this.props.cartItems;

    productItem.value = newQuantity;

    for (var i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        products[i].quantity = newQuantity;
      }
    }

    // update redux store
    this.props.incrementQuantity({ cartItems: products });
    this.props.calculateSubtotal({ cartItems: products });

    console.log("quantity incremented to ", newQuantity);
    console.log("productItem ", productItem);
    console.log("products ", products);
  };

  decrementQuantity = ({ id, quantity }) => {
    var productItem = document.querySelector("#quantity" + id);
    if (Number(productItem.value) > 1) {
      var newQuantity = Number(productItem.value) - 1;
    } else {
      var newQuantity = quantity;
    }
    var products = this.state.cartItems;

    productItem.value = newQuantity;

    for (var i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        products[i].quantity = newQuantity;
      }
    }

    // update redux store
    this.props.incrementQuantity({ cartItems: products });
    this.props.calculateSubtotal({ cartItems: products });

    console.log("quantity decremented to ", newQuantity);
    console.log("productItem ", productItem);
  };

  render() {
    return (
      <div className="cart-items">
        {this.props.cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <div className="quantity-section">
              Quantity:{" "}
              <input
                className="quantity-input"
                id={"quantity" + item.id}
                type="text"
                value={item.quantity}
              />
              <div className="quantity-buttons-container">
                <button
                  onClick={() =>
                    this.incrementQuantity({
                      id: item.id
                    })
                  }
                  className="quantity-button"
                >
                  <span className="arrow-up">&#x2039;</span>
                </button>
                <button
                  onClick={() =>
                    this.decrementQuantity({
                      id: item.id,
                      quantity: item.quantity
                    })
                  }
                  className="quantity-button"
                >
                  <span className="arrow-down">&#x2039;</span>
                </button>
              </div>
            </div>
            <p
              onClick={() =>
                this.props.removeCartItem({
                  cartItems: this.props.cartItems,
                  id: item.id
                })
              }
              className="remove-item-button"
            >
              Remove
            </p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.store.cartItems,
  removedCartItem: state.store.removedCartItem,
  discount: state.store.discount,
  subTotal: state.store.subTotal,
  taxRate: state.store.taxRate,
  tax: state.store.tax
});

export default connect(mapStateToProps, {
  removeCartItem,
  calculateSubtotal,
  recalculateDiscount,
  calculateTax,
  calculateTotal,
  incrementQuantity
})(CartItems);
