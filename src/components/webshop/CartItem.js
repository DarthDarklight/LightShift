import React from "react";
import './ProductList.css';
import './Cart.css';

const CartItem = props => {
  const { cartItem, cartKey } = props;

  const { product, amount } = cartItem;
  return (
    
    <div className=" product-row">
      <div className="o-layout o-layout--small">
        <div className="o-layout__item u-4/10">
          <p>Product</p>
          </div>
          <div className="o-layout__item u-2/10">
          <p>Price</p>
          </div>
          <div className="o-layout__item u-2/10">
          <p>Quantity</p>
          </div>
          <div className="o-layout__item u-2/10">
          <p>Total</p>
          </div>
        </div>
      <div className="cart-product">
        <div className="product-layout">
          <div className="o-layout o-layout--small u-flex u-flex--middle">      
          <div className="o-layout__item u-1/1 u-4/10@tab">
            <div className="o-layout o-layout--tiny u-flex u-flex--middle">
              <div className="o-layout__item u-1/3 u-2/5@tab">
                <figure className="cart-image ">
              <img
                src={product.image}
                alt={product.shortDesc}
                style={{height:"108px",width:"108px"}}
              />
            </figure>
                </div>
                
                <div className="o-layout__item u-2/3 u-3/5@tab">
                  <b style={{ textTransform: "capitalize" }}>
                  {product.name}{" "}
                  
                  </b>
                </div>
                </div>
                </div>  
                <div className="o-layout__item u-1/3 u-2/10@tab">
                  <b style={{ textTransform: "capitalize" }}>
                  ${product.price}  
                  </b>
                </div>
                <div className="o-layout__item u-4/10 u-2/10@tab">
                <b style={{ textTransform: "capitalize" }}>{`${amount} `}</b>
                </div>
                <div className="o-layout__item u-6/10 u-2/10@tab">
                <b style={{ textTransform: "capitalize" }}>
                  ${product.price*amount}  
                  </b>
                </div>
              
                
          </div>
          
          {/* <div className="product-media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              <span className="tag is-primary">${product.price}</span>
            </b>
            <div>{product.shortDesc}</div>
            <small>{`${amount} in cart`}</small>
          </div> */}
          <div
            className="media"
            onClick={() => props.removeFromCart(cartKey)}
          >
            <span className="delete is-large"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;