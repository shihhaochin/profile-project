import React, { useState, useEffect } from "react";
import avatarImg from "../img/aboutUs.png";
import homeImg from "../img/home.png";
import userImg from "../img/user.png";
import skillImg from "../img/skills.png";
import documentImg from "../img/document.png";
import smartphoneImg from "../img/smartphone-call.png";
import loaddingImg from "../img/loading.png";
import leftArrow from "../img/leftArrow.png";

import { Link } from "react-router-dom";
import Clock from "react-live-clock";
import Calender from "react-calendar";
import WeatherData from "./weatherData";
import NbaScore from "./nbaScore";
import MlbScore from "./mlbScore";
import Todolist from "./todolist";

import "react-calendar/dist/Calendar.css";

function naviComponent({
  isHomepage,
  isAboutpage,
  isSkillpage,
  isPortfoliopage,
  isContactpage,
}) {
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [rightNavibar, setRightNavibar] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [leftNavibar, setLeftNavibar] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [avatartext, setAvatartext] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [calendarOpen, setCalendarOpen] = useState(false);

  const searchNbaData = async () => {
    setNbaLoadding(true);
    const dataFetch = await fetch(
      "https://erin-bear-hem.cyclic.app/api/user/nbaApi"
    );

    let parseData = await dataFetch.json();
    setNbaData(parseData);
    if (parseData) {
      setNbaLoadding(false);
    }
  };

  const searchMlbData = async () => {
    setMlbLoadding(true);
    const dataFetch = await fetch(
      "https://erin-bear-hem.cyclic.app/api/user/mlbApi"
    );
    let parseData = await dataFetch.json();
    setMlbData(parseData);
    if (parseData) {
      setMlbLoadding(false);
    }
  };
  const handlerwd = () => {
    if (window.innerWidth < 1300) {
      setRightNavibar(true);
      setLeftNavibar(true);
    } else {
      setRightNavibar(false);
      setLeftNavibar(false);
    }
  };
  const handleText = () => {
    if (window.innerHeight < 700) {
      setAvatartext(true);
      setCalendarOpen(false);
    } else {
      setAvatartext(false);
      setCalendarOpen(true);
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.addEventListener("resize", handlerwd);
    window.addEventListener("resize", handleText);
    return () => {
      window.removeEventListener("resize", handlerwd);
      window.removeEventListener("resize", handleText);
    };
  });

  return (
    <div className="navibar">
      <div
        className={`navibar-left ${leftNavibar ? "navibar-leftChange" : ""}`}
      >
        <div className="avatarImg-box">
          <div className="avatarImg">
            <img src={avatarImg} alt="avatarImg" />
          </div>

          <div
            className="avatar-textClose-btn"
            onClick={() => {
              if (avatartext) {
                setAvatartext(false);
              } else {
                setAvatartext(true);
              }
            }}
          >
            <img src={leftArrow} alt="arrow-img" />
          </div>
        </div>

        <div className={`avatar-text ${avatartext ? "avatar-textClose" : ""}`}>
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
                <p className={isHomepage ? "navibar-menu-purple" : ""}> Home</p>
              </Link>
            </li>
            <li style={{ zIndex: "5" }}>
              <Link to="/aboutme">
                <span>
                  <img src={userImg} alt="user-img" />
                </span>
                <p className={isAboutpage ? "navibar-menu-green" : ""}>
                  About Me
                </p>
              </Link>
            </li>
            <li style={{ zIndex: "4" }}>
              <Link to="/skill">
                <span>
                  <img src={skillImg} alt="skill-img" />
                </span>
                <p className={isSkillpage ? "navibar-menu-yellow" : ""}>
                  Skill
                </p>
              </Link>
            </li>
            <li style={{ zIndex: "3" }}>
              <Link to="/portfolio">
                <span>
                  <img src={documentImg} alt="document-img" />
                </span>
                <p className={isPortfoliopage ? "navibar-menu-pink" : ""}>
                  Portfolio
                </p>
              </Link>
            </li>
            <li style={{ zIndex: "2" }}>
              <Link to="/contact">
                <span>
                  <img src={smartphoneImg} alt="smartphone-img" />
                </span>
                <p className={isContactpage ? "navibar-menu-blue" : ""}>
                  Contact Me
                </p>
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="leftNavibar-btn"
          onClick={() => {
            if (leftNavibar) {
              setLeftNavibar(false);
            } else {
              setLeftNavibar(true);
            }
          }}
        >
          <img src={leftArrow} alt="arrow-img" />
        </div>
      </div>

      <div
        className={`navibar-right ${rightNavibar ? "navibar-rightChange" : ""}`}
      >
        <ul>
          <li>
            <Clock
              className="time"
              format={"HH:mm:ss"}
              ticking={true}
              timezone={"TW/Pacific"}
            />
          </li>
          <li>
            <WeatherData />
          </li>
          <li className="calendarbg">
            <h3
              onClick={() => {
                if (calendarOpen) {
                  setCalendarOpen(false);
                } else {
                  setCalendarOpen(true);
                }
              }}
            >
              月曆
            </h3>
            {calendarOpen && (
              <Calender conChange={setCalendarValue} value={calendarValue} />
            )}
          </li>

          <li
            className="rightNavibar-btn"
            onClick={() => {
              if (rightNavibar) {
                setRightNavibar(false);
              } else {
                setRightNavibar(true);
              }
            }}
          >
            <img src={leftArrow} alt="arrow-img" />
          </li>
          <li
            className="nba-title"
            style={{ cursor: "pointer" }}
            onClick={searchNbaData}
          >
            <p>NBA當日比分</p>
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
          <li
            className="mlb-title"
            style={{ cursor: "pointer" }}
            onClick={searchMlbData}
          >
            <p>MLB當日比分</p>
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
          <li>
            <Todolist />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default naviComponent;
