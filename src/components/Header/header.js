import React from "react";
import Logo from "../../assets/icons/logo";
import Topbar from "../../assets/images/topbar-desktop.png";
import Close from "../../assets/images/close.png";
import Hamburger from "../../assets/images/Hamburger.png";
import Headerstyles from "./header.module.scss";
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
      className={isOpen ? `${Headerstyles.mobile_menu_active}` : `notactive`}
    >
      <div className={Headerstyles.topbar}>
        <img src={Topbar} alt="topbar" />
      </div>
      <div className={Headerstyles.header_inner}>
        <div className={Headerstyles.logos}>
          <a href="#" className={Headerstyles.logo}>
            <Logo />
          </a>
          <img
            src={Hamburger}
            alt="burger menu"
            onClick={toggleMenu}
            className={Headerstyles.burgermenu}
          />
        </div>
        <div className={Headerstyles.header_aside}>
          <div className={Headerstyles.mobile_menu_close}>
            <img
              src={Close}
              alt="Mobile menu close image"
              onClick={toggleMenu}
            />
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
              <li className={Headerstyles.login_btn}>
                <a href="/" className={Headerstyles.btn}>
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
