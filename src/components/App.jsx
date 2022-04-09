import React, { useState, createContext } from 'react';
import Board from './GameBoard';
import Keyboard from './Keyboard';
import { boardDefault } from './GameBoard';


import "./App.css";
import "./Letter.css";
import "./GameBoard.css";

export const WordleContext = createContext();


export default function App() {


    const [board, setBoard] = useState(boardDefault);
    const [currGuess, setCurrGuess] = useState({ guess: 0, letterIndex: 0, currWord: '' });


    const [winningWord, setWinningWord] = useState("happy");

    const [guessLetterColors, setGuessLetterColors] = useState(['', '', '', '', ''])
    /*

    function colorLetters() {
        let validateWord = currGuess.currWord;
        checkGreens(validateWord);
        
        
    }

    const checkGreens = (validateWord) => {
        let greenLetters = [];
        for (let i = 0; i < winningWord.length; i++) {
            if (winningWord.toUpperCase.charAt(i) === validateWord.charAt(i)) {
                greenLetters.push(i);
            }
        }
        return greenLetters;
    }
    */



    function enterSelected() {

        console.log(currGuess.currWord);

        if (currGuess.letterIndex < 5) {
            alert("Guess must be 5 letter long");
            return;
        }

        // colorLetters();

        if (currGuess.currWord === winningWord.toUpperCase()) {
            // ---------------------------WIN CONDITION-----------------------------
            alert("YOU WIN");
        } else {
            setCurrGuess({guess: currGuess.guess + 1, letterIndex: 0, currWord: ''});
        }
    }

    function deleteSelected() {
        if (currGuess.letterIndex === 0) return;
        const currBoard = [...board];
        const newIndex = currGuess.letterIndex - 1;
        currBoard[currGuess.guess][newIndex] = '';
        setCurrGuess({ guess: currGuess.guess, letterIndex: newIndex, currWord: currGuess.currWord.substring(0, currGuess.currWord.length - 1)});
        setBoard(currBoard);
    }



    function letterSelected(key) {
        const currBoard = [...board];
        if (currGuess.letterIndex === 5) return;
        currBoard[currGuess.guess][currGuess.letterIndex] = key;
        setBoard(currBoard);
        setCurrGuess({ guess: currGuess.guess, letterIndex: currGuess.letterIndex + 1, currWord: currGuess.currWord + key});
    }



    return (
        <div className="app">
            <nav>
                <h1>Weddle</h1>
            </nav>
            <WordleContext.Provider value={
                {
                    board,
                    setBoard,
                    currGuess,
                    setCurrGuess,
                    // colorLetters,
                    enterSelected,
                    deleteSelected,
                    letterSelected,
                }
            }>
                <div className="centering">
                    <Board />
                    <Keyboard />
                </div>
            </WordleContext.Provider>
        </div>
    );
}