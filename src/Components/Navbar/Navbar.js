import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/men">Men</Link>
      <Link to="/women">women</Link>
      <Link to="/kids">kids</Link>
    </div>
  );
}
