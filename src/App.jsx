import React from "react";
import Card from "./components/card";
import characters from "./components/characters";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const character = characters;
  return (
    <>
      <div className="wholePage" >
        <div className="headerArea">
          <div className="headerName"></div>
         <ScoreBoard/>
          </div>
        
          <Card
            key={character.cardTitle}
            cardImg={character.cardImg}
            cardTitle={character.cardTitle}
          />
      
      </div>
    </>
  );
}

export default App;