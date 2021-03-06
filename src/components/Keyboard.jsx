import React, { useEffect, useCallback, useContext } from 'react';
import Key from './Key';
import { WordleContext } from './App';
import '../styles/Keyboard.css'


export default function Keyboard() {
    const { deleteSelected, letterSelected, enterSelected } = useContext(WordleContext);
    const keyboardRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keyboardRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keyboardRow3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DEL"];


    useEffect(() => {
        document.addEventListener("keydown", manageletterSelected);
        return function cleanup() {
            document.removeEventListener("keydown", manageletterSelected);
        };
    });

    const manageletterSelected = useCallback((event) => {
        
        if (event.key === "Backspace") {
            deleteSelected();
        } else if (event.key === "Enter") {
            enterSelected();
        } else {
            keyboardRow1.forEach((letter) => {
                if (event.key.toUpperCase() === letter) {
                    letterSelected(letter)
                }
            });
            keyboardRow2.forEach((letter) => {
                if (event.key.toUpperCase() === letter) {
                    letterSelected(letter)
                }
            });
            keyboardRow3.forEach((letter) => {
                if (event.key.toUpperCase() === letter) {
                    letterSelected(letter)
                }
            });
        }
    })

    return (
        <div className="keyboard">
            <div className="keyboardRow">
                {keyboardRow1.map((keyVal) => {
                    return <Key keyValue={keyVal} />
                })}
            </div>
            <div className="keyboardRow">
                {keyboardRow2.map((keyVal) => {
                    return <Key keyValue={keyVal} />
                })}
            </div>
            <div className="keyboardRow">
                {keyboardRow3.map((keyVal) => {
                    return <Key keyValue={keyVal} />
                })}
            </div>
        </div>
    );
}