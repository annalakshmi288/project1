import React from "react";
import Facebook from "../../assets/icons/facebook";
import Instagram from "../../assets/icons/instagram";
import Logo from "../../assets/icons/logo";
import Twitter from "../../assets/icons/twitter";
import Footerstyles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={Footerstyles.footer_inner}>
        <a href="#" className={Footerstyles.logo}>
          <Logo />
        </a>
        <div className={Footerstyles.footer_aside}>
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
