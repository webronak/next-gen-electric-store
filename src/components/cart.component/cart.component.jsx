import React from "react";
import "./cart.stylesheet.scss";
import bulbImg from "../../images/categories.images/bulbs.jpg";
import { connect } from "react-redux";
import CartDisplayAction from "../../redux/cart/cart-display-action";

const Cart = (props) => {
  return (
    <div
      className={props.cartToggle ? "cartComponent" : "cartComponent hidden"}
    >
      <div className="cartItems">
        {props.cartItems
          ? props.cartItems.map((item) => {
              return (
                <div className="cartItem">
                  <div
                    className="cartItemImg"
                    style={{ backgroundImage: `url(${bulbImg})` }}
                  ></div>
                  <div className="cartItemDetail">
                    <div className="cartItemName">{item.name}</div>
                    <div className="cartItemQuantity">
                      <button className="add">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-plus-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                      </button>
                      <div>{item.quantity}</div>
                      <button className="minus">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-dash-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="cartItemPrice">
                  <small>Total</small>
                  <br/>
                  ${item.totalPrice}
                  </div>
                </div>
              );
            })
          : ""}
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
  cartItems: state.cart.cartItems,
});
const mapDispatchToProps = (dispatch) => ({
  setCartToggle: () => dispatch(CartDisplayAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
