import React from "react";
import avatarImg from "../img/aboutUs.png";

const naviComponent = () => {
  return (
    <div className="navibar">
      <div className="navibar-left">
        <div className="avatarImg">
          <img src={avatarImg} alt="avatarImg" />
        </div>
        <div className="navibar-menu">
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Skill</li>
            <li>Portfolio</li>
            <li>Contact Me</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default naviComponent;
