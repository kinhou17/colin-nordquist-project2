import React, {useContext} from 'react';
import {WordleContext} from './App';


export default function Letter({letterIndex, attempt}) {
    const {board, currGuess, winningWord} = useContext(WordleContext);
    const currLetter = board[attempt][letterIndex];


    return (
        <div className="letter" > {currLetter} </div>
    );
}