import React, { useState, useEffect } from "react";
import Card from "./components/card";
import characters from "./components/characters";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  const handleClick = (id) => {
    if (clicked.includes(id)) {
      setScore(0);
      setClicked([]);
    } else {
      setScore(score + 1);
      setClicked([...clicked, id]);
    }
  };

  useEffect(() => {
    if (score > highScore) {
        setHighScore(score);
    }
}, [score, highScore]);

useEffect(() => {
  if (score + 1){
    characters.sort(() => Math.random() - 0.5);

  }})


  return (
    <>
      <div className="wholePage">
        <div className="headerArea">
          <div className="headerName"></div>
          <ScoreBoard score={score} highScore={highScore}/>
        </div>
        <Card characters={characters} handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;