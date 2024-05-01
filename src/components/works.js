import React from "react";
import Underline from "../assets/images/underline.png";
import Group1 from "../assets/images/Group1.png";
import Group3 from "../assets/images/Group3.png";
import Group2 from "../assets/images/box2.png";
import WorkArt from "../assets/images/work2-art.png";

const Works = () => {
  return (
    <>
      <div className="section-works">
        <h2 className="center">How it works?</h2>
        <div className="center underline">
          <img src={Underline} alt="underline image" />
        </div>

        <div className="profile1 group-center">
          <div className="image-box">
            <img
              src={require("../assets/images/1.png")}
              alt="number1"
              className="numbers"
            />
            <img src={Group1} className="base-img" alt="group1 main image" />
          </div>
          <div className="text">
            <h3>Setup your profile & preferences</h3>
            <p className="banner-text">
              Once you create an account, you can start to tell us your likes
              and dislikes so we can tailor the experience just for you.
            </p>
          </div>
        </div>

        <div className="profile2 group-center">
          <div className="move-right">
            <div className="work-art">
              <div className="image-box">
                <img
                  src={require("../assets/images/2.png")}
                  alt="number2"
                  className="numbers"
                />
                <img
                  src={Group2}
                  className="profile2-work"
                  alt="group2 main image"
                />
                <img src={WorkArt} className="workart" alt="group2 art image" />
              </div>
            </div>

            <div className="text">
              <h3>
                Review your <br />
                custom box
              </h3>
              <p className="banner-text">
                Once we get to know you, we will show you the box we’ve crafted.
                This is your chance to approve it before we ship it to your
                house.
              </p>
            </div>
          </div>
        </div>

        <div className="profile3 group-center">
          <div className="image-box">
            <img
              src={require("../assets/images/3.png")}
              alt="number3"
              className="numbers"
            />
            <img src={Group3} className="base-img" alt="group3 main image" />
          </div>
          <div className="text">
            <h3>Try it on at home</h3>
            <p className="banner-text">
              Your box will arrive within 3-5 days (usually sooner) and you get
              the joy to unbox your Upbox. Try it all on and send back whatever
              you’re not in love with.
            </p>
          </div>
        </div>
      </div>

      <div className="center bottom-btn">
        <a href="#" className="btn-red">
          Try it for yourself <span>&gt;</span>
        </a>
      </div>
    </>
  );
};

export default Works;
