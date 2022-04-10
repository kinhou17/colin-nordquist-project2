import React, {useContext} from 'react';
import {WordleContext} from './App';
import './Letter.css';


export default function Letter({letterIndex, attempt}) { // consistency naming
    const {board, boardColors} = useContext(WordleContext);
    const currLetter = board[attempt][letterIndex];

    const currColor = boardColors[attempt][letterIndex];
    // console.log(boardColors[attempt][letterIndex]);
    


    return (
        <div className="letter" id={currColor}> {currLetter} </div>
    );
}