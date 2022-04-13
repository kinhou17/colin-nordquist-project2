import React, { useContext } from 'react';
import { WordleContext } from './App';
import '../styles/Title.css';
import bingo from '../images/bingo.gif';

export default function Title() {
    const { difficultyOptions, gameState, error, currGuess } = useContext(WordleContext);
    let message;
    if (error === "lengthShort") {
        message = "Guess must be " + difficultyOptions.numLetters + " letters long. Try again.";
    } else if (error === "lengthLong") {
        message = "Guess can only be " + difficultyOptions.numLetters + " letters long.";
    } else if (error === "invalidWord") {
        message = "Not a valid word. Try again.";
    } else {
        message = "You have " + (difficultyOptions.guesses - currGuess.guess) + " guesses left.";
    }
    return (
        <div className="title">
            {
                gameState.gameInProgress ?
                    <div>
                        <div className="line">Try to guess the {difficultyOptions.numLetters}-letter word.</div>
                        <div className="line">{message}</div>
                    </div>
                    : <img src={bingo}></img>
            }
        </div>
    );
}