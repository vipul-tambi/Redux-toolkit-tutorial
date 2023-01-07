import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">REDUX STORE</span>
      <div className="navLink">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <span className="cartCount">Cart items : {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
