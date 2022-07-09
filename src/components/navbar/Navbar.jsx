import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About Us</a>
    </p>
    <p>
      <a href="#info">Info</a>
    </p>
    <p>
      <a href="#contact">Contact Us</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="rblog__navbar">
      <div className="rblog__navbar-links">
        <div className="rblog__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="rblog__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="rblog__navbar-sign">
        <p>Log in</p>
        <button type="button">Sign in</button>
      </div>

      <div className="rblog__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="rblog__navbar-menu_container scale-up-center">
            <div className="rblog__navbar-menu_container-links">
              <Menu />
              <div className="rblog__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
