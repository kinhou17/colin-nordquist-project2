import React, { useState, useEffect, createContext } from 'react';
import { useParams } from 'react-router';
import GameBoard from './GameBoard';
import Keyboard from './Keyboard';
import FinishGame from './FinishGame';
import Title from './Title';
import "../styles/App.css";
import "../styles/LetterTile.css";
import "../styles/GameBoard.css";
import { startingBoardEasy, startingBoardMedium, startingBoardHard, boardColorsEasy, boardColorsMedium, boardColorsHard } from './GameBoard';
import { createWordSet, createDictionarySet } from './WordSets';

export const WordleContext = createContext();

export default function App(props) {

    const pathParams = useParams();
    const difficulty = pathParams.difficulty;
    const [boardLetters, setBoardLetters] = useState(
        difficulty === "easy" ? startingBoardEasy : difficulty === "medium" ? startingBoardMedium : startingBoardHard
    );
    const [currGuess, setCurrGuess] = useState({
        guess: 0,
        letterIndex: 0
    });
    const [difficultyOptions, setDifficultyOptions] = useState(
        difficulty === "easy" ? { guesses: 7, numLetters: 5 } : difficulty === "medium" ? { guesses: 6, numLetters: 6 } : { guesses: 5, numLetters: 7 }
    );
    const [boardColors, setBoardColors] = useState(
        difficulty === "easy" ? boardColorsEasy : difficulty === "medium" ? boardColorsMedium : boardColorsHard
    );
    const [winningWord, setWinningWord] = useState("");
    const [greenKeys, setGreenKeys] = useState([]);
    const [yellowKeys, setYellowKeys] = useState([]);
    const [disabledKeys, setDisabledKeys] = useState([]);
    const [gameState, setGameState] = useState({
        gameInProgress: true,
        playerWon: false
    });
    const [error, setError] = useState("none");
    const [winningWordSet, setWinningWordSet] = useState(new Set());
    const [dictSet, setDictSet] = useState(new Set());

    useEffect(() => {
        createDictionarySet().then((dictWords) => {
            setDictSet(dictWords.dictSet);
        });
    }, []);

    useEffect(() => {
        createWordSet(difficulty).then((winnignWords) => {
            setWinningWord(winnignWords.currWord);
            setWinningWordSet(winnignWords.winningWordSet);
        });
    }, []);

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

                const currLetter = boardLetters[currGuess.guess][i];
                if (!yellowKeys.includes(currLetter) && !greenKeys.includes(currLetter)) {
                    disabledKeysTemp.push(currLetter);
                }
            }
        }
        setDisabledKeys(disabledKeysTemp);
    }

    function manageColoring(currGuessWord) {
        let greenLettersRemoved = checkGreens(currGuessWord);
        checkYellows(greenLettersRemoved);
        setGreys()
    }

    function letterSelected(key) {
        const currBoard = [...boardLetters];
        if (currGuess.letterIndex >= difficultyOptions.numLetters) {
            setError("lengthLong");
            return;
        } else {
            setError("none");
        }
        currBoard[currGuess.guess][currGuess.letterIndex] = key;
        setCurrGuess({ guess: currGuess.guess, letterIndex: currGuess.letterIndex + 1 });
        setBoardLetters(currBoard);
    }

    function deleteSelected() {
        if (currGuess.letterIndex === 0) return;
        const currBoard = [...boardLetters];
        setError("none");
        const newIndex = currGuess.letterIndex - 1;
        currBoard[currGuess.guess][newIndex] = '';
        setCurrGuess({ guess: currGuess.guess, letterIndex: newIndex });
        setBoardLetters(currBoard);
    }

    function enterSelected() {
        if (currGuess.letterIndex < difficultyOptions.numLetters) {
            setError("lengthShort");
            return;
        }
        let currGuessWord = '';
        for (let i = 0; i < difficultyOptions.numLetters; i++) {
            currGuessWord += boardLetters[currGuess.guess][i];
        }
        if (!dictSet.has(currGuessWord) && !winningWordSet.has(currGuessWord)) {
            setError("invalidWord");
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
            if (currGuess.guess >= difficultyOptions.guesses - 1) {
                setGameState({
                    gameInProgress: false,
                    playerWon: false
                })
            }
        }
    }

    return (
        <div className="wordle">
            <WordleContext.Provider value={
                {
                    boardLetters,
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
                    winningWord,
                    difficultyOptions,
                    error
                }
            }>
                <div className="centering">
                    <Title />
                    {gameState.gameInProgress ? <GameBoard /> : <FinishGame />}
                    <Keyboard />
                </div>
            </WordleContext.Provider>
        </div>
    );
}