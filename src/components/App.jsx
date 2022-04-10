import React, { useState, createContext } from 'react';
import Board from './GameBoard';
import Keyboard from './Keyboard';
import { boardDefault, boardDefault2 } from './GameBoard';


import "./App.css";
import "./Letter.css";
import "./GameBoard.css";

export const WordleContext = createContext();


export default function App() {


    const [board, setBoard] = useState(boardDefault);
    const [currGuess, setCurrGuess] = useState({ guess: 0, letterIndex: 0}); 
    const [boardColors, setBoardColors] = useState(boardDefault2);
    const [winningWord, setWinningWord] = useState("hpppy");


    let [currWord, setCurrWord] = useState('');
    

    function colorLetters() {
        let validateWord = currWord;  //------------------change ---------------
        console.log("before:");
        console.log(validateWord);

        let correctLettersRemoved = checkGreens(validateWord);

        console.log("middle:");
        console.log(correctLettersRemoved);

        let allLettersRemoved = checkYellows(validateWord, correctLettersRemoved);
        
        console.log("after:");
        console.log(allLettersRemoved);

        
    }

    const checkGreens = (validateWord) => {
        let greensRemoved = '';
        for (let i = 0; i < winningWord.length; i++) {
            const currLetter = validateWord.charAt(i);
            if (winningWord.toUpperCase().charAt(i) === currLetter) {
                let newBoard = [...boardColors];
                newBoard[currGuess.guess][i] = 'correct';
                setBoardColors(newBoard);
                greensRemoved += ' ';
            } else {
                greensRemoved += winningWord.charAt(i);
            }
        }
        return greensRemoved;
    }
    
    const checkYellows = (validateWord, correctLettersRemoved) => {
        for (let i = 0; i < validateWord.length; i++) {
            const currLetter = validateWord.charAt(i);
            for (let j = 0; j < correctLettersRemoved.length; j++) {
                if (currLetter === correctLettersRemoved.charAt(j).toUpperCase() && correctLettersRemoved.charAt(j) != ' ') {
                    let newBoard = [...boardColors];
                    newBoard[currGuess.guess][i] = 'almost';
                    setBoardColors(newBoard);

                    correctLettersRemoved = correctLettersRemoved.split('');
                    correctLettersRemoved[j] = ' ';
                    correctLettersRemoved = correctLettersRemoved.join('');
                    break;
                }
            }
        }
        return correctLettersRemoved;
    }



    function enterSelected() {


        if (currGuess.letterIndex < 5) {
            alert("Guess must be 5 letter long");
            return;
        }

        colorLetters();


        if (currWord === winningWord.toUpperCase()) {
            // ---------------------------WIN CONDITION-----------------------------
            alert("YOU WIN");
        } else {
            setCurrGuess({guess: currGuess.guess + 1, letterIndex: 0});
            setCurrWord('');
        }
    }

    function deleteSelected() {
        if (currGuess.letterIndex === 0) return;
        const currBoard = [...board];
        const newIndex = currGuess.letterIndex - 1;
        currBoard[currGuess.guess][newIndex] = '';
        setCurrWord(currWord.substring(0, currWord.length - 1));
        setCurrGuess({ guess: currGuess.guess, letterIndex: newIndex});
        setBoard(currBoard);
    }



    function letterSelected(key) {
        const currBoard = [...board];
        if (currGuess.letterIndex > 4) return;
        currBoard[currGuess.guess][currGuess.letterIndex] = key;
        setCurrWord(currWord += key);
        setBoard(currBoard);
        setCurrGuess({ guess: currGuess.guess, letterIndex: currGuess.letterIndex + 1});
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
                    boardColors,
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