import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
        <div className="logo">
          <Link to="/">{/* <Logo /> */}</Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
          {/* <p>menu icon</p> */}
        </div>
        <div className={`nav-elements  ${showNavbar && "active"} `}>
          <ul>
            <li className="hover">
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/#aboutus">About us</a>
              {/* <Link to="/#aboutus">About us</Link> */}
            </li>
            <li>
              <a href="/#services" className="">
                Services
              </a>
              {/* <Link to="#services">Services</Link> */}
            </li>
            <li>
              <a href="/#contactus" className="">
                Contact
              </a>
              {/* <Link to="/#contactus">Contact</Link> */}
            </li>
            <li id="getstarted" className="btn btn-success btn-outline ">
              <span className="font-semibold">Get started</span>
            </li>
            <li className="border-2 border-red-400 cursor-pointer w-16 md:w-8">
              {/* <ImageContainer imageurl="/person.png" size={10} /> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
