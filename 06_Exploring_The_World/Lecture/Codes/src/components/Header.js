import { useState } from "react";
import LOGO_URL from "../utils/constant";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
