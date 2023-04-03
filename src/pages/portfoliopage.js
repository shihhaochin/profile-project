import React, { useEffect } from "react";
import linkImg from "../img/link.png";
import { Link } from "react-router-dom";

const portfoliopage = ({
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
    setIsSkillpage(false);
    setIsPortfoliopage(true);
    setIsContactpage(false);
  });
  return (
    <div className="portfolio-bg">
      <div className="portfolio-title">
        <h1>Portfolio</h1>
        <h2>Latest projects</h2>
        <span></span>
      </div>

      <div className="portfolio-box">
        <div className="portfolio-card card-1  ">
          <div className="portfolioImg">
            <div className="portfolioImg01">
              <span className="imgfilter01">
                <div className="img-box01">
                  <Link
                    to="https://shihhaochin.github.io/project02/"
                    target="_blank"
                  >
                    <img src={linkImg} alt="link-img" />
                  </Link>

                  <div className="img-content01">
                    <p># React</p>
                    <p># Tailwind</p>
                    <p># 美髮沙龍</p>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="portfolio-card card-2  ">
          <div className="portfolioImg">
            <div className="portfolioImg02">
              <span className="imgfilter02">
                <div className="img-box02">
                  <Link
                    to="https://shihhaochin.github.io/project01/"
                    target="_blank"
                  >
                    <img src={linkImg} alt="link-img" />
                  </Link>

                  <div className="img-content02">
                    <p># React</p>
                    <p># Scss</p>
                    <p># 旅遊觀光</p>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="portfolio-card card-3  ">
          <div className="portfolioImg">
            <div className="portfolioImg03">
              <span className="imgfilter03">
                <div className="img-box03">
                  <Link
                    to="https://shihhaochin.github.io/client-side-demo/"
                    target="_blank"
                  >
                    <img src={linkImg} alt="link-img" />
                  </Link>

                  <div className="img-content03">
                    <p># React</p>
                    <p># Nodejs</p>
                    <p># Mongodb</p>
                    <p># 社群媒體</p>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfoliopage;
