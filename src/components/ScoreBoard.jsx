import React from "react";
import { useState , useEffect } from "react";


function ScoreBoard(props) {

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        if (score > highScore) {
            setHighScore(score);
        }
    }, [score, highScore]);


    return(
        <div className="scoreBoard">
            <div className="currentScore">Score: {score}</div>
            <div className="highScore">High Score: {highScore}</div>
        </div>
    )


    }

export default ScoreBoard;