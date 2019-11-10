import React, { Component } from "react";
import "./CartItems.css";

class CartItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { name: "Shirt", quantity: 1, price: 30, id: 1 },
        { name: "Jeans", quantity: 1, price: 50, id: 2 },
        { name: "Jacket", quantity: 1, price: 350, id: 3 },
        { name: "Watch", quantity: 1, price: 60, id: 4 }
      ]
    };
  }

  removeItem = id => {
    var product = this.state.cartItems;

    for (var i = 0; i < product.length; i++) {
      if (product[i].id == id) {
        product.splice(i, 1);
        console.log("product Item:", product[i]);
      }
    }
    this.setState({ cartItems: product });

    console.log("item removed from cart:", id);
    console.log("product:", product);
  };

  incrementQuantity = product => {
    var productItem = document.querySelector("#quantity" + product.id);
    var newQuantity = Number(productItem.value) + 1;
    var products = this.state.cartItems;

    productItem.value = newQuantity;

    for (var i = 0; i < products.length; i++) {
      if (products[i].id == product.id) {
        products[i].quantity = newQuantity;
      }
    }
    this.setState({ cartItems: products });

    console.log("quantity incremented to ", newQuantity);
    console.log("productItem ", productItem);
    console.log("products ", products);
  };

  decrementQuantity = product => {
    var productItem = document.querySelector("#quantity" + product.id);
    if (Number(productItem.value) > 1) {
      var newQuantity = Number(productItem.value) - 1;
    } else {
      var newQuantity = product.quantity;
    }
    var products = this.state.cartItems;

    productItem.value = newQuantity;

    for (var i = 0; i < products.length; i++) {
      if (products[i].id == product.id) {
        products[i].quantity = newQuantity;
      }
    }
    this.setState({ cartItems: products });

    console.log("quantity decremented to ", newQuantity);
    console.log("productItem ", productItem);
  };

  render() {
    return (
      <div className="cart-items">
        {this.state.cartItems.map(item => (
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
                      id: item.id,
                      quantity: item.quantity
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
              onClick={() => this.removeItem(item.id)}
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

export default CartItems;
