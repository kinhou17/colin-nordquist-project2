import React, { useContext } from 'react';
import { WordleContext } from './App';
import '../styles/Letter.css';


export default function Letter({ letterIndex, guess }) {
    const { board, boardColors } = useContext(WordleContext);
    const currLetter = board[guess][letterIndex];
    const currColor = boardColors[guess][letterIndex];
    return (
        <div className="letter" id={currColor}> {currLetter} </div>
    );
}