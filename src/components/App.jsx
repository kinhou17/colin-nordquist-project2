import React, { useState, useEffect, createContext } from 'react';
import { useParams } from 'react-router';
import Board from './GameBoard';
import Keyboard from './Keyboard';
import FinishGame from './FinishGame';
import { startingBoardEasy, startingBoardMedium, startingBoardHard, boardColorsEasy, boardColorsMedium, boardColorsHard } from './GameBoard';
import { generateWordSet, generateDictionary } from './WordSets';



import "./App.css";
import "./Letter.css";
import "./GameBoard.css";

export const WordleContext = createContext();


export default function App(props) {

    const pathParams = useParams();
    const difficulty = pathParams.difficulty;



    const [board, setBoard] = useState(difficulty === "easy" ? startingBoardEasy : difficulty === "medium" ? startingBoardMedium : startingBoardHard);
    const [currGuess, setCurrGuess] = useState({
        guess: 0,
        letterIndex: 0
    });
    const [difficultyOptions, setDifficultyOptions] = useState(difficulty === "easy" ? { guesses: 7, numLetters: 5 } : difficulty === "medium" ? { guesses: 6, numLetters: 6 } : { guesses: 5, numLetters: 7 });
    const [boardColors, setBoardColors] = useState(difficulty === "easy" ? boardColorsEasy : difficulty === "medium" ? boardColorsMedium : boardColorsHard);
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
        generateWordSet(difficulty).then((words) => {
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
        for (let i = 0; i < difficultyOptions.numLetters; i++) {
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
        for (let i = 0; i < difficultyOptions.numLetters; i++) {
            const currLetter = greenLettersRemoved.charAt(i);
            if (currLetter != '-') {
                for (let j = 0; j < difficultyOptions.numLetters; j++) {
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


        for (let i = 0; i < difficultyOptions.numLetters; i++) {
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
        if (currGuess.letterIndex < difficultyOptions.numLetters) {
            alert("Guess must be " + difficultyOptions.numLetters + " letters long. Please try again.");
            return;
        }
        let currGuessWord = '';
        for (let i = 0; i < difficultyOptions.numLetters; i++) {
            currGuessWord += board[currGuess.guess][i];
        }
        if (!dictSet.has(currGuessWord) && !wordSet.has(currGuessWord)) {
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
            setCurrGuess({ guess: currGuess.guess + 1, letterIndex: 0 });
        }
        if (currGuess.guess >= difficultyOptions.guesses - 1) {
            setGameState({
                gameInProgress: false,
                playerWon: false
            })
        }
    }

    function deleteSelected() {
        if (currGuess.letterIndex === 0) return;
        const currBoard = [...board];
        const newIndex = currGuess.letterIndex - 1;
        currBoard[currGuess.guess][newIndex] = '';
        setCurrGuess({ guess: currGuess.guess, letterIndex: newIndex });
        setBoard(currBoard);
    }

    function letterSelected(key) {
        const currBoard = [...board];
        if (currGuess.letterIndex >= difficultyOptions.numLetters) return;
        currBoard[currGuess.guess][currGuess.letterIndex] = key;
        setBoard(currBoard);
        setCurrGuess({ guess: currGuess.guess, letterIndex: currGuess.letterIndex + 1 });
    }

    return (
        <div className="app">
            <div className="title">Try to guess the {difficultyOptions.numLetters}-letter word.<br></br>You have {difficultyOptions.guesses} attempts.</div>
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
                    gameState,
                    difficulty,
                    winningWord
                }
            }>
                <div className="centering">
                    {gameState.gameInProgress ? <Board /> : <FinishGame />}
                    <Keyboard />
                </div>
            </WordleContext.Provider>
        </div>
    );
}