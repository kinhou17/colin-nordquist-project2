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
    const [winningWord, setWinningWord] = useState("tater");
    const [greenKeys, setGreenKeys] = useState([]);
    const [yellowKeys, setYellowKeys] = useState([]);
    const [disabledKeys, setDisabledKeys] = useState([]);



    

    function colorLetters() {
        let currGuessWord = '';
        for (let i = 0; i < winningWord.length; i++) {
            currGuessWord += board[currGuess.guess][i];
        }
        let greenLettersRemoved = checkGreens(currGuessWord);
        console.log("Before " + greenLettersRemoved);
        checkYellows(greenLettersRemoved);
        setGreys()
        return currGuessWord;
    }

    const checkGreens = (currGuessWord) => {
        let greensRemoved = '';
        let greenKeysTemp = [...greenKeys];
        for (let i = 0; i < winningWord.length; i++) {
            const currLetter = currGuessWord.charAt(i);
            if (winningWord.toUpperCase().charAt(i) === currLetter) {
                let newBoard = [...boardColors];
                newBoard[currGuess.guess][i] = 'green';
                setBoardColors(newBoard);
                greensRemoved += '-';
                /*
                console.log("CURRENT LETTER: " + currLetter)
                console.log("GREEN LETTERS: " + greenLetters);
                console.log("GREEN LETTERS TEMP: " + greenLettertemp);
                //if (!greenLettertemp.includes(currLetter)) {
                greenLettertemp.push(currLetter);
                //}
                */
                if (!greenKeysTemp.includes(currLetter)) {
                    greenKeysTemp.push(currLetter);
                }
            } else {
                greensRemoved += currLetter;
            }
        }
        setGreenKeys(greenKeysTemp);
        return greensRemoved;
    }
    
    const checkYellows = (greenLettersRemoved) => {
        let LettersRemoved = greenLettersRemoved;
        let yellowKeysTemp = [...yellowKeys];
        for (let i = 0; i < greenLettersRemoved.length; i++) {
            const currLetter = greenLettersRemoved.charAt(i);
            if (currLetter != '-') {
                for (let j = 0; j < winningWord.length; j++) {
                    if (currLetter === winningWord.charAt(j).toUpperCase() && i != j && LettersRemoved.charAt(j) != '-') {
                        let newBoard = [...boardColors];
                        newBoard[currGuess.guess][i] = 'yellow';
                        setBoardColors(newBoard);

                        if (!yellowKeysTemp.includes(currLetter) && !greenKeys.includes(currLetter)) {
                            yellowKeysTemp.push(currLetter);
                        }

                        LettersRemoved = LettersRemoved.split('');
                        LettersRemoved[j] = '-';
                        LettersRemoved = LettersRemoved.join('');             
                        break;
                    }
                }
            }
        setYellowKeys(yellowKeysTemp);

        }

    }

    const setGreys = () => {
        let disabledKeysTemp = [...disabledKeys];
        

        for (let i = 0; i < winningWord.length; i++) {
            if (boardColors[currGuess.guess][i] === '') {
                let newBoard = [...boardColors];
                newBoard[currGuess.guess][i] = 'grey';
                setBoardColors(newBoard);

                const currLetter = board[currGuess.guess][i];
                if (!yellowKeys.includes(currLetter) && !greenKeys.includes(currLetter)) {
                    disabledKeysTemp.push(currLetter);
                }

            }
        }
        setDisabledKeys(disabledKeysTemp);
    }


    function enterSelected() {
        if (currGuess.letterIndex < 5) {
            alert("Guess must be 5 letter long");
            return;
        }

        let currGuessWord = colorLetters();

        if (currGuessWord === winningWord.toUpperCase()) {
            // ---------------------------WIN CONDITION-----------------------------
            alert("YOU WIN");
        } else {
            setCurrGuess({guess: currGuess.guess + 1, letterIndex: 0});
        }
    }

    function deleteSelected() {
        if (currGuess.letterIndex === 0) return;
        const currBoard = [...board];
        const newIndex = currGuess.letterIndex - 1;
        currBoard[currGuess.guess][newIndex] = '';
        setCurrGuess({ guess: currGuess.guess, letterIndex: newIndex});
        setBoard(currBoard);
    }

    function letterSelected(key) {
        const currBoard = [...board];
        if (currGuess.letterIndex > 4) return;
        currBoard[currGuess.guess][currGuess.letterIndex] = key;
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
                    greenKeys,
                    yellowKeys,
                    disabledKeys,
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