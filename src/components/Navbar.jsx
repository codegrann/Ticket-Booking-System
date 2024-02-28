import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";
// import Logo from "./Minor/Logo";
// import "../App.css";
// import ImageContainer from "./Minor/ImageContainer";
import Hamburger from "../assets/Hamburger";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  // const navigate = useNavigate();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container ">
        <div className="logo">logo</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"} `}>
          <ul>
            <li>Events</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
