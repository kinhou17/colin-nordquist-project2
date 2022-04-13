import React, { useContext } from 'react';
import { WordleContext } from './App';
import '../styles/LetterTile.css';


export default function LetterTile({ letterIndex, guess }) {
    const { boardLetters, boardColors } = useContext(WordleContext);
    const currLetter = boardLetters[guess][letterIndex];
    const currColor = boardColors[guess][letterIndex];
    return (
        <div className="letterTile" id={currColor}> {currLetter} </div>
    );
}