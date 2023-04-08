import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const clickHandler = () => {
    setClick(!click);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <Link>
            <img src={logo} alt="" width={100} />
          </Link>

          <ul className={
            click ? "nav-menu active" : "nav-menu"
          }>
            <li onClick={clickHandler}>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li onClick={clickHandler}>
              <NavLink className="nav-link" to="/menu">
                Menu
              </NavLink>
            </li>
            <li onClick={clickHandler}>
              <NavLink className="nav-link" to="/delivery">
                Delivery
              </NavLink>
            </li>
            <li onClick={clickHandler}>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li onClick={clickHandler}>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li onClick={clickHandler}>
              <button>Order Now</button>
            </li>
          </ul>

          <div className="hamburger" onClick={clickHandler}>
            {click ? (
                <FaTimes size={20} style={{ color: "#fff" }}></FaTimes>
            ) : (
              <FaBars size={20} style={{ color: "#fff" }}></FaBars>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
