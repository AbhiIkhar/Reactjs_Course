import { useState } from "react";
import LOGO_URL from "../utils/constant";
import { Link, NavLink } from "react-router-dom";
import About from "./About";
import SignInForm from "./SignUp";
const Header = () => {
  const [btnName, setBtnname] = useState("login");
  console.log("Header is rendered");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="Logo" src={LOGO_URL} alt="LogoImg" />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">HOME</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/more">More</Link>
        </ul>
        <button
          className="login"
          onClick={() => {
            btnName === "login" ? setBtnname("logout") : setBtnname("login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
