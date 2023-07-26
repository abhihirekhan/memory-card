import React from "react";

function Card({ characters, handleClick }) {
  return (
    <div className="spacingDiv">
      <div className="cardArea">
        {characters.map((character) => (
          <button
            onClick={() => handleClick(character.cardTitle)}
            className="cardButton"
            id={character.cardTitle}
            key={character.cardTitle}
          >
            <div className="characterCard" id={character.cardTitle} key={character.cardTitle}>
              <img className="characterImg" draggable="false" id={character.cardTitle} src={character.cardImg} alt={character.cardTitle} />
              <h1 className="roleName">{character.cardTitle}</h1>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Card;