import React from "react";
import playAgainLoser from "../functions/playAgainLoser";
function Lose() {
  return (
    <div className="losePop">
      <p className="loseText">
        YOU DIED{" "}
        <button className="playAgainLose" onClick={playAgainLoser}></button>
      </p>
    </div>
  );
}

export default Lose;
