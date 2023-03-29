import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { SvgBlob } from "react-svg-blob";
import facebookImg from "../img/facebookImg.png";
import instagramImg from "../img/instagramImg.png";
import googleImg from "../img/googleImg.png";
import twitterImg from "../img/twitterImg.png";
import { Link } from "react-router-dom";

const homepage = () => {
  return (
    <div className="homepage-bg">
      <div className="homepage">
        <div className="homepage-left">
          <h2>Hello, my name is</h2>
          <h1>CHIN SHIH HAO</h1>
          <h3>And I'm a </h3>
          <TypeWriterEffect
            startDelay={100}
            cursorColor="aqua"
            multiText={[
              "Web Developer",
              "Frontend Developer",
              "React Developer",
            ]}
            multiTextDelay={1000}
            typeSpeed={100}
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            reiciendis placeat at voluptatum dicta magnam blanditiis beatae
            maiores eos corrupti, laboriosam unde fuga ex dolores ipsa minus
            pariatur labore consequuntur.
          </p>
          <div className="socialImg">
            <img src={facebookImg} alt="facebook-img" />
            <img src={instagramImg} alt="instagram=img" />
            <img src={googleImg} alt="google-img" />
            <img src={twitterImg} alt="twitter-img" />
          </div>
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "rgb(85,43,203)" }}
            >
              Contact Me
            </Link>
          </button>

          <div className="blob">
            <SvgBlob variant="solid" color="#000000" />
          </div>
        </div>

        <div className="homepage-right">
          <div className="cube-box">
            <div className="cube cube-1">
              <div className="cube-block block-1">
                <span style={{ zIndex: "3" }}></span>
                <span style={{ zIndex: "2" }}></span>
                <span style={{ zIndex: "1" }}></span>
              </div>
              <div className="cube-block block-2">
                <span style={{ zIndex: "3" }}></span>
                <span style={{ zIndex: "2" }}></span>
                <span style={{ zIndex: "1" }}></span>
              </div>
              <div className="cube-block block-3">
                <span style={{ zIndex: "3" }}></span>
                <span style={{ zIndex: "2" }}></span>
                <span style={{ zIndex: "1" }}></span>
              </div>
            </div>
            <div className="cube cube-2">
              <div className="cube-block block-1">
                <span style={{ zIndex: "3" }}></span>
                <span style={{ zIndex: "2" }}></span>
                <span style={{ zIndex: "1" }}></span>
              </div>
              <div className="cube-block block-2">
                <span style={{ zIndex: "3" }}></span>
                <span style={{ zIndex: "2" }}></span>
                <span style={{ zIndex: "1" }}></span>
              </div>
              <div className="cube-block block-3">
                <span style={{ zIndex: "3" }}></span>
                <span style={{ zIndex: "2" }}></span>
                <span style={{ zIndex: "1" }}></span>
              </div>
            </div>
            <div className="cube cube-3">
              <div className="cube-block block-1">
                <span style={{ zIndex: "3" }}></span>
                <span style={{ zIndex: "2" }}></span>
                <span style={{ zIndex: "1" }}></span>
              </div>
              <div className="cube-block block-2">
                <span style={{ zIndex: "3" }}></span>
                <span style={{ zIndex: "2" }}></span>
                <span style={{ zIndex: "1" }}></span>
              </div>
              <div className="cube-block block-3">
                <span style={{ zIndex: "3" }}></span>
                <span style={{ zIndex: "2" }}></span>
                <span style={{ zIndex: "1" }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default homepage;
