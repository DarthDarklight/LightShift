import React from "react";
import withContext from "../../withContext";
import CartItem from "./CartItem";
import './ProductList.css';
import './Cart.css';
import { borderTop } from "@mui/system";

const Cart = props => {
  const { cart } = props.context;
  const cartKeys = Object.keys(cart || {});
  return (
    <>
      <div className="product-container is-primary">
        <div className="product-container-body container">
          <h4 className="product-title">My Cart</h4>
        </div>
      </div>
      <br />
      <div className="cart-container">
        {cartKeys.length ? (
          <div className="product-column ">
            {cartKeys.map(key => (
              <CartItem
                cartKey={key}
                key={key}
                cartItem={cart[key]}
                removeFromCart={props.context.removeFromCart}
              />
            ))}
            <div className="product-column is-12 is-clearfix">
              <br />
              <div className="is-pulled-right">
                
                <button
                  onClick={props.context.clearCart}
                  className="cart-button is-warning "
                >
                  Clear cart
                </button>{" "}
                <button
                  className="cart-button is-success"
                  onClick={props.context.checkout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
          
        ) : (
          <div className="column">
            <div className="product-title has-text-grey-light">No item in cart!</div>
          </div>
        )}
      </div>
    </>
  );
};

export default withContext(Cart);