import React, { useEffect, useCallback, useContext } from 'react';
import Key from './Key';
import { WordleContext } from './App';
import './Keyboard.css'


export default function Keyboard() {
    const { enterPress, deletePress, keyPress, disabledLetters } = useContext(WordleContext);

    const keyboardRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keyboardRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keyboardRow3 = ["Z", "X", "C", "V", "B", "N", "M"];


    useEffect(() => {
        document.addEventListener("keydown", manageKeyPress)
        return function cleanup() {
            document.removeEventListener("keydown", manageKeyPress)
        };
    });

    const manageKeyPress = useCallback((event) => {

        console.log(event.key);


        if (event.key === "Enter") {
            enterPress(); //------------------CREATE----------------
        } else if (event.key === "Backspace") {
            deletePress(); //------------------CREATE----------------
        } else {
            keyboardRow1.forEach((key) => {
                if (event.key.toUpperCase() === key) {
                    keyPress(key) //------------------CREATE----------------
                }
            });
            keyboardRow2.forEach((key) => {
                if (event.key.toUpperCase() === key) {
                    keyPress(key)
                }
            });
            keyboardRow3.forEach((key) => {
                if (event.key.toUpperCase() === key) {
                    keyPress(key)
                }
            });
        }
    })

    return (
        <div className="keyboard">
            <div className="line">
                {keyboardRow1.map((key) => {
                    return <Key keyVal={key} />
                })}
            </div>
            <div className="line">
                {keyboardRow2.map((key) => {
                    return <Key keyVal={key} />
                })}
            </div>
            <div className="line">
                {keyboardRow3.map((key) => {
                    return <Key keyVal={key} />
                })}
            </div>
        </div>
    );
}