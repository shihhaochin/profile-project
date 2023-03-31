import React from "react";

const mlbScore = ({ mlbData, setMlbData }) => {
  return (
    <div className="mlbScore-box">
      {mlbData.dates[0].games.map((data) => (
        <div>
          <p>
            <span>{data.teams.home.team.clubName}</span>
            <span> : </span>
            <span>{data.teams.home.score}</span>
          </p>
          <p>VS</p>
          <p>
            <span>{data.teams.away.team.clubName}</span>
            <span> : </span>
            <span>{data.teams.away.score}</span>
          </p>
        </div>
      ))}
      <div
        className="mlb-close"
        onClick={() => {
          setMlbData("");
        }}
      >
        <span></span>
      </div>
    </div>
  );
};

export default mlbScore;
