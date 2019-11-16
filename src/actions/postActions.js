import {
  REMOVE_CART_ITEM,
  CALCULATE_SUBTOTAL,
  CALCULATE_TAX,
  CALCULATE_TOTAL,
  APPLY_DISCOUNT,
  RECALCULATE_DISCOUNT,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY
} from "./types";

export function removeCartItem({ cartItems, id }) {
  var products = cartItems;
  var removedCartItem = {};

  console.log("inital products variable:", products);
  console.log("inital id parameter:", id);

  for (var i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      removedCartItem = products[i];
      console.log("[i]:", i);
      console.log("product Item:", products[i]);

      // remove product from array
      products.splice(i, 1);
    }
  }

  console.log("item removed from cart:", id);
  console.log("product:", products);
  console.log("removedCartItem:", removedCartItem);

  return function(dispatch) {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: removedCartItem
    });
  };
}

export function calculateSubtotal({ cartItems }) {
  var prices = [];
  var subtotal = 0;

  // go through cartItems and multiply price by quantity
  for (var i = 0; i < cartItems.length; i++) {
    prices.push(Number(cartItems[i].price) * Number(cartItems[i].quantity));
  }
  console.log("prices:", prices);

  // add all the prices in the array together
  for (var j = 0; j < prices.length; j++) {
    subtotal += Number(prices[j]);
  }
  console.log("subtotal:", subtotal);

  // dispatch subtotal price
  return function(dispatch) {
    dispatch({
      type: CALCULATE_SUBTOTAL,
      payload: subtotal
    });
  };
}

export function calculateTax({ subTotal, taxRate }) {
  var tax = (subTotal * taxRate).toFixed(2);
  console.log("subTotal: $" + subTotal);
  console.log("taxRate: $" + taxRate);
  console.log("tax: $" + tax);

  return function(dispatch) {
    dispatch({
      type: CALCULATE_TAX,
      payload: tax
    });
  };
}

export function calculateTotal({ subTotal, tax, discount }) {
  console.log("-----------------------");
  var total = subTotal + Number(tax) - discount.amount;
  console.log("subTotal:", subTotal);
  console.log("tax:", tax);
  console.log("discount:", discount);
  console.log("total price of order:", total.toFixed(2));
  console.log("-----------------------");

  return function(dispatch) {
    dispatch({
      type: CALCULATE_TOTAL,
      payload: total
    });
  };
}

export function applyDiscount({ discountCodes, formInput, subTotal }) {
  var discount = { amount: 0, percent: 0 };

  for (var i = 0; i < discountCodes.length; i++) {
    if (discountCodes[i].name == formInput.toUpperCase()) {
      console.log(
        "discount code",
        formInput.toUpperCase(),
        "has been accepted"
      );
      discount.amount = subTotal * discountCodes[i].discountPercent;
      discount.percent = discountCodes[i].discountPercent;
      break;
    }
  }

  return function(dispatch) {
    dispatch({
      type: APPLY_DISCOUNT,
      payload: discount
    });
  };
}

export function recalculateDiscount({ discount, subTotal }) {
  console.log("**Inside recalculateDiscount action**");
  console.log("discount:", discount);

  var newAmount = subTotal * discount.percent;
  // var newdiscount = {
  //   amount: newAmount,
  //   percent: discount.percent
  // };

  var newdiscount = discount;
  newdiscount.amount = newAmount;

  console.log("re-calculated discount:", discount, "newdiscount", newdiscount);

  return function(dispatch) {
    dispatch({
      type: RECALCULATE_DISCOUNT,
      payload: newdiscount
    });
  };
}

export function incrementQuantity({ cartItems }) {
  console.log("cartItems: ", cartItems);

  return function(dispatch) {
    dispatch({
      type: INCREMENT_QUANTITY,
      payload: cartItems
    });
  };
}

export function decrementQuantity({ cartItems }) {
  console.log("cartItems: ", cartItems);

  return function(dispatch) {
    dispatch({
      type: DECREMENT_QUANTITY,
      payload: cartItems
    });
  };
}
