import React from 'react';
import bulbImg from "../../images/categories.images/bulbs.jpg";
import {useDispatch} from "react-redux"
import addCartItems,{ CartRemoveReduceQuantity  } from "../../redux/cart/cart-additem-action";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
    return(
        <div className="cartItem">
                  <div
                    className="cartItemImg"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                  <div className="cartItemDetail">
                    <div className="cartItemName">{item.name}</div>
                    <div className="cartItemQuantity">
                      <button className="add" onClick={()=>{

                      }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-plus-circle-fill"
                          viewBox="0 0 16 16"
                          onClick={() => dispatch(addCartItems(item))}
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                      </button>
                      <div>{item.quantity}</div>
                      <button className="minus" onClick={() => dispatch(CartRemoveReduceQuantity(item._id))}>
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
                  {item.totalPrice}
                  </div>
                </div>
    );
};



export default CartItem;