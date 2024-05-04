import React from "react";
import Underline from "../../assets/images/underline.png";
import Group1 from "../../assets/images/Group1.png";
import Group3 from "../../assets/images/Group3.png";
import Group2 from "../../assets/images/box2.png";
import WorkArt from "../../assets/images/work2-art.png";
import Workstyles from "./work.module.scss";

const Works = () => {
  return (
    <>
      <div className={Workstyles.section_works}>
        <h2 className="center">How it works?</h2>
        <div className={`center ${Workstyles.underline}`}>
          <img src={Underline} alt="underline image" />
        </div>

        <div className={`${Workstyles.profile1} ${Workstyles.group_center}`}>
          <div className={Workstyles.image_box}>
            <img
              src={require("../../assets/images/1.png")}
              alt="number1"
              className={Workstyles.numbers}
            />
            <img
              src={Group1}
              className={Workstyles.base_img}
              alt="group1 main image"
            />
          </div>
          <div className={Workstyles.text}>
            <h3>Setup your profile & preferences</h3>
            <p className={Workstyles.banner_text}>
              Once you create an account, you can start to tell us your likes
              and dislikes so we can tailor the experience just for you.
            </p>
          </div>
        </div>

        <div className={`${Workstyles.profile2} ${Workstyles.group_center}`}>
          <div className={Workstyles.move_right}>
            <div className={Workstyles.work_art}>
              <div className={Workstyles.image_box}>
                <img
                  src={require("../../assets/images/2.png")}
                  alt="number2"
                  className={Workstyles.numbers}
                />
                <img
                  src={Group2}
                  className={Workstyles.profile2_work}
                  alt="group2 main image"
                />
                <img
                  src={WorkArt}
                  className={Workstyles.workart}
                  alt="group2 art image"
                />
              </div>
            </div>

            <div className={Workstyles.text}>
              <h3>
                Review your <br />
                custom box
              </h3>
              <p className={Workstyles.banner_text}>
                Once we get to know you, we will show you the box we’ve crafted.
                This is your chance to approve it before we ship it to your
                house.
              </p>
            </div>
          </div>
        </div>

        <div className={`${Workstyles.profile3} ${Workstyles.group_center}`}>
          <div className={Workstyles.image_box}>
            <img
              src={require("../../assets/images/3.png")}
              alt="number3"
              className={Workstyles.numbers}
            />
            <img
              src={Group3}
              className={Workstyles.base_img}
              alt="group3 main image"
            />
          </div>
          <div className={Workstyles.text}>
            <h3>Try it on at home</h3>
            <p className={Workstyles.banner_text}>
              Your box will arrive within 3-5 days (usually sooner) and you get
              the joy to unbox your Upbox. Try it all on and send back whatever
              you’re not in love with.
            </p>
          </div>
        </div>
      </div>

      <div className={`center ${Workstyles.bottom_btn}`}>
        <a href="#" className="btn-red">
          Try it for yourself <span>&gt;</span>
        </a>
      </div>
    </>
  );
};

export default Works;
