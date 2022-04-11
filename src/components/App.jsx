import React, {useState, useEffect, createContext} from 'react';
import Board from './GameBoard';
import Keyboard from './Keyboard';
import FinishGame from './FinishGame';
import {boardDefault, boardDefault2} from './GameBoard';
import {generateWordSet, generateDictionary} from './WordSets';



import "./App.css";
import "./Letter.css";
import "./GameBoard.css";

export const WordleContext = createContext();


export default function App() {


    const [board, setBoard] = useState(boardDefault);
    const [currGuess, setCurrGuess] = useState({ 
        guess: 0, 
        letterIndex: 0
    }); 
    const [boardColors, setBoardColors] = useState(boardDefault2);
    const [winningWord, setWinningWord] = useState("");
    const [greenKeys, setGreenKeys] = useState([]);
    const [yellowKeys, setYellowKeys] = useState([]);
    const [disabledKeys, setDisabledKeys] = useState([]);
    const [gameState, setGameState] = useState({
        gameInProgress: true,
        playerWon: false
    });

    const [wordSet, setWordSet] = useState(new Set());
    const [dictSet, setDictSet] = useState(new Set());



    useEffect(() => {
        generateWordSet().then((words) => {
            setWordSet(words.wordSet);
            setWinningWord(words.currWord);
            console.log(words.currWord);
        });
    }, []);

    useEffect(() => {
        generateDictionary().then((words) => {
            setDictSet(words.dictSet);
        });
    }, []);
    

    function manageColoring(currGuessWord) {

        let greenLettersRemoved = checkGreens(currGuessWord);
        checkYellows(greenLettersRemoved);
        setGreys()
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
        if (currGuess.letterIndex < winningWord.length) {
            alert("Guess must be " + winningWord.length + " letters long. Please try again.");
            return;
        }
        let currGuessWord = '';
        for (let i = 0; i < winningWord.length; i++) {
            currGuessWord += board[currGuess.guess][i];
        }
        if (!dictSet.has(currGuessWord)) {
            alert("Sorry, " + currGuessWord + " is not a valid word. Please try again.");
            return;
        }
        manageColoring(currGuessWord);
        if (currGuessWord === winningWord.toUpperCase()) {
            setGameState({
                gameInProgress: false, 
                playerWon: true
            })
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
                    gameState
                }
            }>
                <div className="centering">
                    {gameState.gameInProgress ? <Board/> : <FinishGame />}
                    <Keyboard />
                </div>
            </WordleContext.Provider>
        </div>
    );
}