// i want this component to check if the user has clicked on a cardButton
// if they have not clicked on that button, then the score should increase by 1
// if they have clicked on a button, then the score should reset to 0
// i want it to use the id of the card to see if its been clicked before
// i want it to update the scoreBoard component
import React from "react";
import { useState, useEffect } from "react";
import Card from "./card";
import ScoreBoard from "./ScoreBoard";
import characters from "./characters";

function ClickTracker(props) {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clicked, setClicked] = useState([]);
console.log(clicked);
    useEffect(() => {
        if (score > highScore) {
            setHighScore(score);
        }
    }, [score, highScore]);

    function handleClick(event) {
        const id = event.target.id;
        if (clicked.includes(id)) {
            setScore(0);
            setClicked([]);
        } else {
            setScore(score + 1);
            setClicked([...clicked, id]);
        }
    }

    return (
        <>
            <ScoreBoard score={score} highScore={highScore} />
            <Card handleClick={handleClick} characters={characters} />
        </>
    );
}

    export default ClickTracker;

