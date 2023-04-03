import React, { useEffect } from "react";
import htmlImg from "../img/html.png";
import cssImg from "../img/css.png";
import jsImg from "../img/jsImg.png";
import reactImg from "../img/React.png";
import nodejsImg from "../img/nodejs.png";
import mongodbImg from "../img/Mongodb.png";

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

const skillpage = ({
  setIsHomepage,
  setIsAboutpage,
  setIsSkillpage,
  setIsPortfoliopage,
  setIsContactpage,
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setIsHomepage(false);
    setIsAboutpage(false);
    setIsSkillpage(true);
    setIsPortfoliopage(false);
    setIsContactpage(false);
  });

  return (
    <div className="skill-bg">
      <h1>~What i know~</h1>
      <div className="skill-content">
        <div className="exprience-box">
          <h1>My exprience</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, iure,
            ut incidunt suscipit voluptates, officia molestias minima laborum
            nostrum consequatur ipsa commodi. Incidunt quam voluptate
            praesentium repellat obcaecati officia nemo! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Officia maxime vero vel quae cum.
            Quaerat hic ratione voluptatibus error? Officiis amet expedita
            voluptatibus minima quam, ad iure itaque labore animi!
          </p>
          <button>Read more</button>
        </div>

        <div className="skill-box">
          <h1>My skills</h1>
          <h2>Fontend developer</h2>
          <div className="skill-html">
            <img src={htmlImg} alt="htmlIcon" />
            <div className="html-circle-container">
              <div className="html-circular-progress">
                <span className="html-progress-value">
                  <Number n={90} />%
                </span>
              </div>
            </div>
            <div className="html-bar-container">
              <div className="html-bar"></div>
              <span className="html-bar-value">
                <Number n={90} />%
              </span>
            </div>
          </div>

          <div className="skill-css">
            <img src={cssImg} alt="cssIcon" />
            <div className="css-circle-container">
              <div className="css-circular-progress">
                <span className="css-progress-value">
                  <Number n={80} />%
                </span>
              </div>
            </div>
            <div className="css-bar-container">
              <div className="css-bar"></div>
              <span className="css-bar-value">
                <Number n={80} />%
              </span>
            </div>
          </div>

          <div className="skill-js">
            <img src={jsImg} alt="jsIcon" />
            <div className="js-circle-container">
              <div className="js-circular-progress">
                <span className="js-progress-value">
                  <Number n={70} />%
                </span>
              </div>
            </div>
            <div className="js-bar-container">
              <div className="js-bar"></div>
              <span className="js-bar-value">
                <Number n={70} />%
              </span>
            </div>
          </div>

          <div className="skill-react">
            <img src={reactImg} alt="reactIcon" />
            <div className="react-circle-container">
              <div className="react-circular-progress">
                <span className="react-progress-value">
                  <Number n={80} />%
                </span>
              </div>
            </div>
            <div className="react-bar-container">
              <div className="react-bar"></div>
              <span className="react-bar-value">
                <Number n={80} />%
              </span>
            </div>
          </div>
          <h2>Backend developer</h2>

          <div className="skill-node">
            <img src={nodejsImg} alt="nodejs-Icon" />
            <div className="node-circle-container">
              <div className="node-circular-progress">
                <span className="node-progress-value">
                  <Number n={65} />%
                </span>
              </div>
            </div>
            <div className="node-bar-container">
              <div className="node-bar"></div>
              <span className="node-bar-value">
                <Number n={65} />%
              </span>
            </div>
          </div>

          <div className="skill-mongo">
            <img src={mongodbImg} alt="mongodb-Icon" />
            <div className="mongo-circle-container">
              <div className="mongo-circular-progress">
                <span className="mongo-progress-value">
                  <Number n={65} />%
                </span>
              </div>
            </div>
            <div className="mongo-bar-container">
              <div className="mongo-bar"></div>
              <span className="mongo-bar-value">
                <Number n={65} />%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skillpage;
