import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ImageContainer from "./ImageContainer";
import "./Navbar.css";
// import Logo from "./Minor/Logo";
// import "../App.css";
// import ImageContainer from "./Minor/ImageContainer";
import Hamburger from "../assets/Hamburger";
import Logo from "./Logo";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container ">
        <div
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          {/* <Logo/> */}
          logo
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"} `}>
          <ul>
            <li>Events</li>
            <li
              id="getstarted"
              className="btn btn-success btn-outline"
              onClick={() => {
                navigate("/signup");
              }}
            >
              <span className="font-semibold">Get started</span>
            </li>
            <li
              className="border-2 cursor-pointer w-16 md:w-8"
              onClick={() => {
                navigate("/profile");
              }}
            >
              <ImageContainer imageurl="/person.png" size={10} />
              {/* <img src="/person.png" alt="usericon" className=" size" /> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
