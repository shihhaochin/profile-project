import React from "react";

const nbaScore = ({ nbaData }) => {
  return (
    <div>
      {nbaData && (
        <div>
          {nbaData.scoreboard.games.map((data) => (
            <p>
              {data.homeTeam.teamName}
              {data.homeTeam.score}:{data.awayTeam.teamName}
              {data.awayTeam.score}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default nbaScore;
