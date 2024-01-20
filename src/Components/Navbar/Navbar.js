import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [focused, setFocused] = useState(null);
  const selected = (option) => {
    if (option === focused) {
      return <hr />;
    }
  };

  return (
    <div className="nav">
      <div className="navbar">
        <Link to="/" onClick={() => setFocused(null)}>
          SnapCart
        </Link>
        <ul className="navigation-links">
          <li className="nav-item">
            <Link to="/men" onClick={() => setFocused("men")}>
              Men{selected("men")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/women" onClick={() => setFocused("women")}>
              Women{selected("women")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/kids" onClick={() => setFocused("kids")}>
              Kids{selected("kids")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/watch" onClick={() => setFocused("watch")}>
              Watches{selected("watch")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" onClick={() => setFocused("cart")}>
              Cart
              {selected("cart")}
              <p>0</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/loginpage" onClick={() => setFocused("login")}>
              Login/Logout{selected("login")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
