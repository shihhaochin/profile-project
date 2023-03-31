import React, { useState, useEffect } from "react";
import avatarImg from "../img/aboutUs.png";
import homeImg from "../img/home.png";
import userImg from "../img/user.png";
import skillImg from "../img/skills.png";
import documentImg from "../img/document.png";
import smartphoneImg from "../img/smartphone-call.png";
import loaddingImg from "../img/loading.png";
import { Link } from "react-router-dom";
import Clock from "react-live-clock";
import Calender from "react-calendar";
import NbaScore from "./nbaScore";
import MlbScore from "./mlbScore";
import "react-calendar/dist/Calendar.css";

function naviComponent() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [calendarValue, setCalendarValue] = useState(new Date());
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [nbaData, setNbaData] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mlbData, setMlbData] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mlbLoadding, setMlbLoadding] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [nbaLoadding, setNbaLoadding] = useState(false);

  const searchNbaData = async () => {
    setNbaLoadding(true);
    const dataFetch = await fetch("http://localhost:8000/api/user/nbaApi");

    let parseData = await dataFetch.json();
    setNbaData(parseData);
    if (parseData) {
      setNbaLoadding(false);
    }
  };
  const searchMlbData = async () => {
    setMlbLoadding(true);
    const dataFetch = await fetch("http://localhost:8000/api/user/mlbApi");
    let parseData = await dataFetch.json();
    setMlbData(parseData);
    if (parseData) {
      setMlbLoadding(false);
    }
  };

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
          {/* <li>
            <Clock format={"HH:mm:ss"} ticking={true} timezone={"TW/Pacific"} />
          </li>
          <li>
            <Calender conChange={setCalendarValue} value={calendarValue} />
          </li> */}
          <li style={{ cursor: "pointer" }} onClick={searchNbaData}>
            NBA當日賽事
          </li>
          {nbaLoadding === true && (
            <li className="loaddingImg">
              <img src={loaddingImg} alt="loadding-img" />
            </li>
          )}
          {nbaData && (
            <li className="nbaScoreboard">
              <h1>今日NBA比賽</h1>
              <NbaScore nbaData={nbaData} setNbaData={setNbaData} />
            </li>
          )}
          <li style={{ cursor: "pointer" }} onClick={searchMlbData}>
            MLB當日賽事
          </li>
          {mlbLoadding === true && (
            <li className="loaddingImg">
              <img src={loaddingImg} alt="loadding-img" />
            </li>
          )}

          {mlbData && (
            <li className="mlbScoreboard">
              <h1>今日MLB比賽</h1>
              <MlbScore mlbData={mlbData} setMlbData={setMlbData} />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default naviComponent;
