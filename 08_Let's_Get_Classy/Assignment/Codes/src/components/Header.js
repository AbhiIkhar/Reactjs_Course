import { useState } from "react";
import LOGO_URL from "../utils/constant";
import SignupForm from "./SignUp";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnname] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
        <button
          className="login"
          onClick={(e) => {
            btnName === "login" ? setBtnname(logout) : setBtnname("login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
