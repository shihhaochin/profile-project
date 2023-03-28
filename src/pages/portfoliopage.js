import React from "react";

const portfoliopage = () => {
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
              <span className="imgfilter01"></span>
            </div>
          </div>
        </div>
        <div className="portfolio-card card-2  ">
          <div className="portfolioImg">
            <div className="portfolioImg02">
              <span className="imgfilter02"></span>
            </div>
          </div>
        </div>
        <div className="portfolio-card card-3  ">
          <div className="portfolioImg">
            <div className="portfolioImg03">
              <span className="imgfilter03"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfoliopage;
