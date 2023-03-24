import React from "react";
import htmlImg from "../img/html.png";
import cssImg from "../img/css.png";
import jsImg from "../img/jsImg.png";

import { useSpring, animated } from "react-spring";

//react-spring usage 控制數字從１跑到 100
function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const skillpage = () => {
  return (
    <div className="skill-bg">
      <div className="skill-box">
        <div className="skill-html">
          <img src={htmlImg} alt="htmlIcon" />
          <div className="html-circle-container">
            <div className="html-circular-progress">
              <span className="html-progress-value">
                <Number n={85} />%
              </span>
            </div>
          </div>
          <div className="html-bar-container">
            <div className="html-bar"></div>
            <span className="html-bar-value">
              <Number n={85} />%
            </span>
          </div>
        </div>

        <div className="skill-css">
          <img src={cssImg} alt="cssIcon" />
          <div className="css-circle-container">
            <div className="css-circular-progress">
              <span className="css-progress-value">
                <Number n={85} />%
              </span>
            </div>
          </div>
          <div className="css-bar-container">
            <div className="css-bar"></div>
            <span className="css-bar-value">
              <Number n={85} />%
            </span>
          </div>
        </div>

        <div className="skill-js">
          <img src={jsImg} alt="jsIcon" />
          <div className="js-circle-container">
            <div className="js-circular-progress">
              <span className="js-progress-value">
                <Number n={75} />%
              </span>
            </div>
          </div>
          <div className="js-bar-container">
            <div className="js-bar"></div>
            <span className="js-bar-value">
              <Number n={75} />%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skillpage;
