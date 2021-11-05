import React from "react";
import "./cart.stylesheet.scss";
import bulbImg from "../../images/categories.images/bulbs.jpg";
import { connect } from "react-redux";
import CartDisplayAction from "../../redux/cart/cart-display-action";
import CartItem from "./cartItem-component";
// cart item selector (redux)
import { selectCartItems } from "../../redux/cart/cart-selectors";

const Cart = (props) => {
  return (
    <div
      className={props.cartToggle ? "cartComponent" : "cartComponent hidden"}
    >
      <div className="cartItems" style={{ position: "relative" }}>
        {props.cartItems && props.cartItems.length ? (
          props.cartItems.map((item) => {
            console.log(item);
            return <CartItem item={item} />;
          })
        ) : (
          <span
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              fontWeight: "900",
              fontSize: "20px",
              border: "2px dashed",
              color: "#cacaca",
              padding: "10px 25px",
              borderRadius: "8px",
            }}
          >
            Cart Is Empty
          </span>
        )}
      </div>
      <div className="cartFotter">
        <button className="cartCollapse" onClick={() => props.setCartToggle()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-arrow-left-circle"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />
          </svg>
        </button>
        <button type="button" className="cartCheckout">
          Checkout: $
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartToggle: state.cart.toggle,
  cartItems: selectCartItems(state),
});
const mapDispatchToProps = (dispatch) => ({
  setCartToggle: () => dispatch(CartDisplayAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
