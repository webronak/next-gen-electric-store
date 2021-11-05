import { addCartItems, removeReduceQuantity } from "./cart-utils";

const innitialState = {
  cartItems: [],
  toggle: false,
};

const cartReducer = (state = innitialState, action) => {
  switch (action.type) {
    case "CART_TOGGLE":
      return {
        ...state,
        toggle: !state.toggle,
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addCartItems(state.cartItems, action.payload),
      };
    case "REDUCE_REMOVE":
      return {
        ...state,
        cartItems: state.cartItems.length?removeReduceQuantity(state.cartItems, action.payload):[],
      };

    default:
      return state;
  }
};

export default cartReducer;
