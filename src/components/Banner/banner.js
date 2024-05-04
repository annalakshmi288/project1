import React from "react";
import BannerImage from "../../assets/images/box.png";
import BoxArt from "../../assets/images/box-art.png";
import Bannerstyles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={Bannerstyles.banner}>
      <div className={Bannerstyles.left_content}>
        <h1>Look good without leaving your house.</h1>
        <p className={Bannerstyles.banner_text}>
          Upbox is the easiest way to look your best without having to hunt for
          the perfect makeup combination. Our stylists curate the latest trends
          and send them directly to your door every month.
        </p>
        <a href="#" className="btn-red">
          Sign Up <span>&gt;</span>
        </a>
      </div>
      <div className={Bannerstyles.right_image}>
        <img
          src={BoxArt}
          alt="Home banner box-art image"
          className={Bannerstyles.boxart_overlap}
        />
        <img
          src={BannerImage}
          alt="Home banner box-image"
          className={Bannerstyles.base_image}
        />
      </div>
    </div>
  );
};

export default Banner;
