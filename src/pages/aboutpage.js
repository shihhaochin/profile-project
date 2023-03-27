import React from "react";
import highschoolImg from "../img/highschool.png";
import dayehImg from "../img/Dayeh.png";
import soldierImg from "../img/soldier.png";
import hotelImg from "../img/hotel.png";
import japanImg from "../img/japan.png";
import contaiImg from "../img/contai.png";

const aboutpage = () => {
  return (
    <div className="aboutmepage">
      <div className="aboutme-box">
        <div className="timeline">
          <div className="container left-container">
            <img src={highschoolImg} alt="highschool-logo" />
            <div className="text-box">
              <h2>花蓮高中</h2>
              <small>2004 - 2007</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                optio doloremque dolorem odio a vero. Sed, labore explicabo!
                Reprehenderit veniam assumenda ipsum voluptates cumque, ut at
                exercitationem fugit sapiente laboriosam.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="container right-container">
            <img src={dayehImg} alt="dayeh-logo" />
            <div className="text-box">
              <h2>大葉大學</h2>
              <small>2007 - 20011</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                optio doloremque dolorem odio a vero. Sed, labore explicabo!
                Reprehenderit veniam assumenda ipsum voluptates cumque, ut at
                exercitationem fugit sapiente laboriosam.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="container left-container">
            <img src={soldierImg} alt="soldier-logo" />
            <div className="text-box">
              <h2>兵役</h2>
              <small>2011 - 2012</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                optio doloremque dolorem odio a vero. Sed, labore explicabo!
                Reprehenderit veniam assumenda ipsum voluptates cumque, ut at
                exercitationem fugit sapiente laboriosam.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="container right-container">
            <img src={hotelImg} alt="hotel-logo" />
            <div className="text-box">
              <h2>花蓮亞士都飯店</h2>
              <small>2012 - 2013</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                optio doloremque dolorem odio a vero. Sed, labore explicabo!
                Reprehenderit veniam assumenda ipsum voluptates cumque, ut at
                exercitationem fugit sapiente laboriosam.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="container left-container">
            <img src={japanImg} alt="japan-logo" />
            <div className="text-box">
              <h2>日本</h2>
              <small>2013 - 2019</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                optio doloremque dolorem odio a vero. Sed, labore explicabo!
                Reprehenderit veniam assumenda ipsum voluptates cumque, ut at
                exercitationem fugit sapiente laboriosam.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="container right-container">
            <img src={contaiImg} alt="contai-logo" />
            <div className="text-box">
              <h2>康泰保全</h2>
              <small>2020 - 2022</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                optio doloremque dolorem odio a vero. Sed, labore explicabo!
                Reprehenderit veniam assumenda ipsum voluptates cumque, ut at
                exercitationem fugit sapiente laboriosam.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutme-bg">
        <div className="bubbles-box">
          <div className="bubbles">
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 24 }}></span>
            <span style={{ "--i": 30 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 28 }}></span>
            <span style={{ "--i": 17 }}></span>
            <span style={{ "--i": 26 }}></span>
            <span style={{ "--i": 13 }}></span>
            <span style={{ "--i": 14 }}></span>
            <span style={{ "--i": 28 }}></span>
            <span style={{ "--i": 20 }}></span>
            <span style={{ "--i": 17 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 24 }}></span>
            <span style={{ "--i": 27 }}></span>
            <span style={{ "--i": 15 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 23 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 25 }}></span>
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 24 }}></span>
            <span style={{ "--i": 30 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 28 }}></span>
            <span style={{ "--i": 17 }}></span>
            <span style={{ "--i": 26 }}></span>
            <span style={{ "--i": 13 }}></span>
            <span style={{ "--i": 14 }}></span>
            <span style={{ "--i": 28 }}></span>
            <span style={{ "--i": 20 }}></span>
            <span style={{ "--i": 17 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 24 }}></span>
            <span style={{ "--i": 27 }}></span>
            <span style={{ "--i": 15 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 23 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 25 }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutpage;
