// i want this component to check if the user has clicked on a cardButton
// if they have not clicked on that button, then the score should increase by 1
// if they have clicked on a button, then the score should reset to 0
import React from "react";
import { useState, useEffect } from "react";
import Card from "./card";
import ScoreBoard from "./ScoreBoard";
import characters from "./characters";

function ClickTracker(props) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  console.log(clicked);
  console.log(score);
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  function handleClick(cardButton) {
    if (clicked === false) {
      setScore(score + 1);
      setClicked(true);
    } else {
      setScore(0);
      setClicked(false);
    }
  }

  return (
    <div className="wholePage">
      <div className="headerArea">
        <div className="headerName"></div>
        <div className="scoreBoard">
          <div className="currentScore">Score: {score}</div>
          <div className="highScore">High Score: {highScore}</div>
        </div>
      </div>
      <div className="spacingDiv">
        <div className="cardArea">
          {" "}
          {characters.map((character) => (
            <button
              className="cardButton"
              id={character.cardTitle}
              key={character.cardTitle}
              onClick={handleClick}
            >
              {" "}
              <div
                className="characterCard"
                id={character.cardTitle}
                key={character.cardTitle}
              >
                <img
                  className="characterImg"
                  src={character.cardImg}
                  alt={character.cardTitle}
                />
                <h1 className="roleName">{character.cardTitle}</h1>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClickTracker;
