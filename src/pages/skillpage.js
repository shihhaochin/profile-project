import React from "react";
import htmlImg from "../img/html.png";
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
            <div className="circular-progress">
              <span className="progress-value">
                <Number n={85} />%
              </span>
            </div>
          </div>
          <div className="html-bar-container">
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skillpage;
