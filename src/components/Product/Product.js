import { Star } from "@material-ui/icons";
import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="pr_title">
          <p className="pro_title">{title}</p>
        </div>
        <div className="proudercts_pp">
          <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>

        <div className="product_rating">
          <p>
            <Star />
            <Star />
            <Star />
            <Star />
          </p>
        </div>
        <button className="proudect_button">Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
