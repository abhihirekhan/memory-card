import React from "react";

function ScoreBoard({ score, highScore }) {
  return (
    <div className="scoreBoard">
      <div className="currentScore">Score: {score}</div>
      <div className="highScore">High Score: {highScore}</div>
    </div>
  );
}

export default ScoreBoard;
