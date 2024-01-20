import React from "react";
import "./Cart.css";

export default function Cart() {
  return (
    <div className="cart_page">
      <div className="cart_column">
        <h2>Your Cart is empty.</h2>
        <h3>Login to access cart</h3>
      </div>
      <div className="cart_footer">
        The price and availability of items at Amazon.in are subject to change.
        The shopping cart is a temporary place to store a list of your items and
        reflects each item's most recent price. Do you have a promotional code?
        We'll ask you to enter your claim code when it's time to pay
      </div>
    </div>
  );
}
