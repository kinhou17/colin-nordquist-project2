import React, {useContext} from "react";
import {WordleContext} from "./App";

export default function GameOver() {
    const {gameState, currGuess, winningWord} = useContext(WordleContext);

    let winLose;
    if (gameState.playerWon) {
        winLose = "CONGRATULATIONS YOU GOT IT!";
    } else {
        winLose = "YOU FAILED";
    }

    return (
        <div className="Game Over!">
            <h2>{winLose}</h2>
            <h2>Correct: {winningWord} </h2>
            {gameState.playerWon && (<h2>You guessed in {currGuess.guess + 1} attempts</h2>)}
        </div>
    )
}