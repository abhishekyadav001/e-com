import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="top-0 p-2 border-b-2 border-b-slate-400">
      <div className="container mx-auto flex justify-between items-center w-full">
        <div className="flex items-center w-1/4">
          <Link to={"/"}>
            <h1>Cart Karo</h1>
          </Link>
          <div className="flex items-center justify-between w-3/4 ">
            <Link to={"/:all"}>
              <p className="p-1">All</p>
            </Link>
            <Link to={"/:clothes"}>
              <p className="p-1"> Clothes</p>
            </Link>
            <Link to={"/:electronics"}>
              <p className="p-1">Electronics</p>
            </Link>
            <Link to={"/:furniture"}>
              <p className="p-1">Furniture</p>
            </Link>
            <Link to={"/:toys"}>
              <p className="p-1">Toys</p>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between w-1/4">
          <Link to={"/"}>
            <p className="p-1">mail@gmail.com</p>
          </Link>
          <Link to={"/orders"}>
            <p className="p-1">My Orders</p>
          </Link>
          <Link to={"/account"}>
            <p className="p-1">My Account</p>
          </Link>
          <Link to={"/cart"}>
            <p className="p-1">Cart</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
