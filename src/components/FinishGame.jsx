import React, {useContext} from "react";
import {WordleContext} from "./App";
import './FinishGame.css'

export default function GameOver() {
    const {gameState, currGuess, winningWord} = useContext(WordleContext);

    let winLose;
    if (gameState.playerWon) {
        winLose = "YOU GOT IT!";
    } else {
        winLose = "YOU FAILED";
    }

    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <div className="gameOver">
            <h2>{winLose}</h2>
            <h2>Correct Word: {winningWord} </h2>
            {gameState.playerWon && (<h2>You guessed in {currGuess.guess + 1} attempts</h2>)}
            <button id={"refreshButton"} onClick={refreshPage}>Click to play again!</button>
        </div>
    )
}

