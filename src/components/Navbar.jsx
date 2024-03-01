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

const Navbar = ({ role, setRole }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const logOut = () => {
    setRole("");
    alert("logged out successfully");
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
            <li onClick={() => navigate("/")} className="cursor-pointer">
              Events
            </li>
            {role == "" && (
              <li
                id="getstarted"
                className="btn btn-success btn-outline"
                onClick={() => {
                  navigate("/signin");
                }}
              >
                <span className="font-semibold">Get started</span>
              </li>
            )}
            {role == "ADMIN" && (
              <li
                className="border-2 cursor-pointer w-16 md:w-8"
                onClick={() => {
                  navigate("/admin");
                }}
              >
                <ImageContainer imageurl="/person.png" size={10} />
              </li>
            )}
            {role == "CLIENT" && (
              <li
                className="border-2 cursor-pointer w-16 md:w-8"
                onClick={() => {
                  navigate("/client");
                }}
              >
                <ImageContainer imageurl="/person.png" size={10} />
              </li>
            )}
            {role != "" && <li onClick={logOut}>Log out</li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
