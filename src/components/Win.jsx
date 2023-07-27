import React from "react";
import playAgainWinner from "../functions/playAgainWinner";
function Win() {
  return (
    <div className="winPop">
      <h1 className="winText">
        Praised be the Tarnished!
        <button className="playAgainWin" onClick={playAgainWinner}></button>
      </h1>
    </div>
  );
}

export default Win;
