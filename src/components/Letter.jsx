import React, {useContext} from 'react';
import {WordleContext} from './App';
import '../styles/Letter.css';


export default function Letter({letterIndex, attempt}) {
    const {board, boardColors} = useContext(WordleContext);
    const currLetter = board[attempt][letterIndex];
    const currColor = boardColors[attempt][letterIndex];
    
    return (
        <div className="letter" id={currColor}> {currLetter} </div>
    );
}