import React from "react";
import characters from "./characters";

function Card() {
  return (
    <div className="spacingDiv">
      <div className="cardArea">
        {" "}
        {characters.map((character) => (
          <button
            className="cardButton"
            id={character.cardTitle}
            key={character.cardTitle}
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
  );
}

export default Card;
