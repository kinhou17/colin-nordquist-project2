import React, {useState, createContext} from 'react';
import Board from './GameBoard';
import { boardDefault } from './GameBoard';


import "./App.css";
import "./Letter.css";
import "./GameBoard.css";

export const Context = createContext();


export default function App() {


    const [board, setBoard] = useState(boardDefault);
    const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPosition: 0 });



    return (
        <div className="app">
            <nav>
                <h1>Weedle</h1>
            </nav>
            <Context.Provider value={
                {
                    board,
                    setBoard,
                    currAttempt,
                    setCurrAttempt,
                }
            }>
            <div className="centering">
                <Board />
            </div>
            </Context.Provider>
        </div>
    );
}