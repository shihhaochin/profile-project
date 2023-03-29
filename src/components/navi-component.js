import React, { useState } from "react";
import avatarImg from "../img/aboutUs.png";
import homeImg from "../img/home.png";
import userImg from "../img/user.png";
import skillImg from "../img/skills.png";
import documentImg from "../img/document.png";
import smartphoneImg from "../img/smartphone-call.png";
import { Link } from "react-router-dom";
import Clock from "react-live-clock";
import Calender from "react-calendar";
import "react-calendar/dist/Calendar.css";

function naviComponent() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [calendarValue, setCalendarValue] = useState(new Date());
  return (
    <div className="navibar">
      <div className="navibar-left">
        <div className="avatarImg">
          <img src={avatarImg} alt="avatarImg" />
        </div>
        <div className="avatar-text">
          <h2>CHIN SHIH HAO</h2>
          <ul>
            <li>Birthday : 8 October 1989 </li>
            <li>Age : 33</li>
            <li>Email : shihhao108@gmail.com</li>
            <li>Phone : 0916952516</li>
            <li>City : Taipei</li>
          </ul>
        </div>
        <div className="navibar-menu">
          <ul>
            <li style={{ zIndex: "6" }}>
              <Link to="/">
                <span>
                  <img src={homeImg} alt="home-Img" />
                </span>
                Home
              </Link>
            </li>
            <li style={{ zIndex: "5" }}>
              <Link to="/aboutme">
                <span>
                  <img src={userImg} alt="user-img" />
                </span>
                About Me
              </Link>
            </li>
            <li style={{ zIndex: "4" }}>
              <Link to="/skill">
                <span>
                  <img src={skillImg} alt="skill-img" />
                </span>
                Skill
              </Link>
            </li>
            <li style={{ zIndex: "3" }}>
              <Link to="/portfolio">
                <span>
                  <img src={documentImg} alt="document-img" />
                </span>
                Portfolio
              </Link>
            </li>
            <li style={{ zIndex: "2" }}>
              <Link to="/contact">
                <span>
                  <img src={smartphoneImg} alt="smartphone-img" />
                </span>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="navibar-right">
        <ul>
          <li>
            <Clock format={"HH:mm:ss"} ticking={true} timezone={"TW/Pacific"} />
          </li>
          <li>
            <Calender conChange={setCalendarValue} value={calendarValue} />
          </li>
          <li>NBA</li>
          <li>MLB</li>
          <li>英超</li>
        </ul>
      </div>
    </div>
  );
}

export default naviComponent;
