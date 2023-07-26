import React, { useState, useEffect } from "react";
import Card from "./components/card";
import characters from "./components/characters";
import ScoreBoard from "./components/ScoreBoard";
import Win from "./components/Win";
import Lose from "./components/Lose";
import  winner  from "./functions/winFunc";
import loser from "./functions/loseFunc";
function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clicked, setClicked] = useState([]);
console.log(clicked);
  const handleClick = (id) => {
    if (clicked.includes(id)) {
      setScore(0);
      setClicked([]);
      loser();
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
  if (score === 10){
  setScore(0);
  setClicked([]);
  }})

useEffect(() => {
  if (score + 1){
    characters.sort(() => Math.random() - 0.5);

  }})

 winner({score});


  return (
    <>
      <div className="wholePage">
        <div className="headerArea">
          <div className="headerName"></div>
          <ScoreBoard score={score} highScore={highScore}/>
        </div>
        <div className="main"> <Card characters={characters} handleClick={handleClick} /></div>
       
      </div>
      <div className="popUps">
        <div className="winPopUp"><Win/></div>
        <div className="losePopUp"><Lose/></div>
      </div>
    </>
  );
}

export default App;