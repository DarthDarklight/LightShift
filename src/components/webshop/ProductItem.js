import React from "react";
import './ProductList.css';
import { width } from "@mui/system";

const ProductItem = props => {
  const { product , addToCart} = props;
  
  return (
  
    <div className=" product-column is-half">
      <div className="product-box">
        <div className="product-media">
          <div className="product-media-left ">
            <figure className="product-image is-256x256 ">
              <img
                src={product.image}
                alt={product.shortDesc}
                style={{height:"256px",width:"256px"}}
              />
            </figure>
            <p>Price: ${product.price}</p>
            {product.stock > 0 ? (
              <small className="tag is-primary">{product.stock + " Available"}</small>
            ) : (
              <small className="has-text-danger">Out Of Stock</small>
            )}
          </div>
          
          <div className="product-media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              
            </b>
            <div>{product.shortDesc}</div>
            <div><pre>{product.description}</pre></div>
            
            <div className="is-clearfix">
              <button
                className="product-button is-outlined is-primary "
                onClick={() =>
                  props.addToCart({
                    id: product.name,
                    product,
                    amount: 1
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;