import React from "react";
import Logo from "../assets/icons/logo";
import Topbar from "../assets/images/topbar-desktop.png";
import Close from "../assets/images/close.png";
import Hamburger from "../assets/images/Hamburger.png";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`header ${isOpen ? "mobile-menu active" : "not-active"}`}
    >
      <div className="top-bar">
        <img src={Topbar} alt="topbar" />
      </div>
      <div className="header-inner">
        <div className="logos">
          <a href="#" className="logo">
            <Logo />
          </a>
          <img
            src={Hamburger}
            alt="burger menu"
            onClick={toggleMenu}
            className="burger-menu"
          />
        </div>
        <div className="header-aside">
          <div className="mobile-menu-close">
            <img src={Close} alt="mobile-menu-close" onClick={toggleMenu} />
          </div>
          <nav>
            <ul>
              <li>
                <a href="/">This month</a>
              </li>
              <li>
                <a href="/">Skin</a>
              </li>
              <li>
                <a href="/">Hair</a>
              </li>
              <li>
                <a href="/">Bath</a>
              </li>
              <li>
                <a href="/">Sale</a>
              </li>
              <li className="login-btn">
                <a href="/" className="btn">
                  Log in <span>&gt;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
