const initialState = {
  cartItems: [
    { name: "Shirt", quantity: 1, price: 30, id: 1 },
    { name: "Jeans", quantity: 1, price: 50, id: 2 },
    { name: "Jacket", quantity: 1, price: 350, id: 3 },
    { name: "Watch", quantity: 1, price: 60, id: 4 }
  ],
  taxRate: 0.07,
  discountCodes: [{ name: "REACT", discountPercent: 0.1 }],
  subTotal: 0,
  tax: 0,
  discount: { amount: 0, percent: 0 },
  total: 0
};

export default initialState;
