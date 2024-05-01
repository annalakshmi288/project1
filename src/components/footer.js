import React from "react";
import Facebook from "../assets/icons/facebook";
import Instagram from "../assets/icons/instagram";
import Logo from "../assets/icons/logo";
import Twitter from "../assets/icons/twitter";

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <a href="#" className="logo">
          <Logo />
        </a>
        <div className="footer-aside">
          <ul>
            <li>
              <a href="#">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="#">
                <Facebook />
              </a>
            </li>

            <li>
              <a href="#">
                <Twitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
