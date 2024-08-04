import { useContext, useState } from "react";
import LOGO_URL from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnName, setBtnname] = useState("LOGIN");
  // const [onlineStatus, setOnlineStatus] = useState("Online 🟢");

  const { loggedInUser } = useContext(UserContext);
  console.log("Header is rendered");
  return (
    <div className="flex  bg-red-400 box-border justify-between p-2 m-3 shadow-lg shadow-red-500/50">
      <div className="w-56">
        <img className="Logo" src={LOGO_URL} alt="LogoImg" />
      </div>
      <div className="flex justify-around m-4 gap-4">
        <ul className="flex justify-around gap-4">
          <li className="rounded-full border-orange-400">
            {useOnlineStatus() ? "Online 🟢" : "Offline 🔴"}
          </li>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/grocerry">GROCERRY</Link>
          </li>
        </ul>
        <button
          className="login"
          onClick={() => {
            btnName === "LOGIN" ? setBtnname("LOGOUT") : setBtnname("LOGIN");
          }}
        >
          {btnName}
        </button>
        <li className="list-none">{loggedInUser}</li>
      </div>
    </div>
  );
};

export default Header;
