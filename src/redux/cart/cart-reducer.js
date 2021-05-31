import { addCartItems } from './cart-utils';

const innitialState = {
  toggle: false,
  cartItems: [],
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
        cartItems: addCartItems(state.cartItems,action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
