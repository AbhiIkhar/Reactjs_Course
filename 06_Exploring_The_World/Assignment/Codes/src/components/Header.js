import { useState } from "react";
import LOGO_URL from "../utils/constant";

const Header = () => {
  const [btnName, setBtnname] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" />
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
          onClick={(e) => {
            btnName === "login" ? setBtnname("logout") : setBtnname("login");
            console.log(e.target);
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
