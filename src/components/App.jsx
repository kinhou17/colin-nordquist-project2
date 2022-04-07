import React, {useState, createContext} from 'react';
import Board from './GameBoard';
import Keyboard from './Keyboard';
import { boardDefault } from './GameBoard';


import "./App.css";
import "./Letter.css";
import "./GameBoard.css";

export const WordleContext = createContext();


export default function App() {


    const [board, setBoard] = useState(boardDefault);
    const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterIndex: 0 });



    return (
        <div className="app">
            <nav>
                <h1>Weddle</h1>
            </nav>
            <WordleContext.Provider value={
                {
                    board,
                    setBoard,
                    currAttempt,
                    setCurrAttempt,
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