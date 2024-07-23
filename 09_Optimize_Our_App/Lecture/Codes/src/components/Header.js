import { useState } from "react";
import LOGO_URL from "../utils/constant";
import { Link, NavLink } from "react-router-dom";
import About from "./About";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnname] = useState("login");
  // const [onlineStatus, setOnlineStatus] = useState("Online 🟢");
  console.log("Header is rendered");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="Logo" src={LOGO_URL} alt="LogoImg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>{useOnlineStatus() ? "Online 🟢" : "Offline 🔴"}</li>
          <li>
            {" "}
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocerry">Grocerry</Link>
          </li>
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
