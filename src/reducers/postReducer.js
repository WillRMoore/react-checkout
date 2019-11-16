import {
  REMOVE_CART_ITEM,
  CALCULATE_SUBTOTAL,
  CALCULATE_TAX,
  CALCULATE_TOTAL,
  APPLY_DISCOUNT,
  RECALCULATE_DISCOUNT,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY
} from "../actions/types";
import initialState from "../initialState";

export default function(state = initialState, action) {
  switch (action.type) {
    case REMOVE_CART_ITEM:
      return {
        ...state,
        removedCartItem: action.payload
      };

    case CALCULATE_SUBTOTAL:
      return {
        ...state,
        subTotal: action.payload
      };

    case CALCULATE_TAX:
      return {
        ...state,
        tax: action.payload
      };

    case CALCULATE_TOTAL:
      return {
        ...state,
        total: action.payload
      };

    case APPLY_DISCOUNT:
      return {
        ...state,
        discount: action.payload
      };

    case RECALCULATE_DISCOUNT:
      return {
        ...state,
        discount: action.payload
      };

    case INCREMENT_QUANTITY:
      return {
        ...state,
        cartItems: action.payload
      };

    case DECREMENT_QUANTITY:
      return {
        ...state,
        cartItems: action.payload
      };

    default:
      return state;
  }
}
