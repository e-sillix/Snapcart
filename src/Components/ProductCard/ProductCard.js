import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ name, image, prices, oldprices, id }) {
  return (
    <Link to={`/product/${id}`} className="Product_Link">
      <div className="product_card">
        <img src={image} alt="imag altte" height="100px" width="100px" />
        <div>{name}</div>
        <div>Rs.{prices}</div>
        <div>Rating: 4/5</div>
      </div>
    </Link>
  );
}
