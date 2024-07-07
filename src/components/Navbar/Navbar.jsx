import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <>
      <div className="navbar">
        <img src={assets.logo} alt="" className="logo" />
        <h1>iEngineering</h1>
        <ul className="navbar-menu">
          <Link to="/">
            <li
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </li>
          </Link>
          <Link to="/services">
            <li
              onClick={() => setMenu("services")}
              className={menu === "services" ? "active" : ""}
            >
              Services
            </li>
          </Link>
          <li
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile-App
          </li>
          <li
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
