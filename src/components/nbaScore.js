import React from "react";

const nbaScore = ({ nbaData, setNbaData }) => {
  return (
    <div className="nbaScore-box">
      {nbaData.scoreboard.games.map((data) => (
        <div id={data.gameId}>
          <p>
            <span>{data.homeTeam.teamName}</span>
            <span> : </span>
            <span>{data.homeTeam.score}</span>
          </p>
          <p>VS</p>
          <p>
            <span>{data.awayTeam.teamName}</span>
            <span> : </span>
            <span>{data.awayTeam.score}</span>
          </p>
        </div>
      ))}
      {nbaData && nbaData.scoreboard.games.length === 0 && <p>今天休賽</p>}
      <div
        className="nba-close"
        onClick={() => {
          setNbaData("");
        }}
      >
        <span></span>
      </div>
    </div>
  );
};

export default nbaScore;
