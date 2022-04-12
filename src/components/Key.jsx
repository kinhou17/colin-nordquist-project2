import React, {useContext} from 'react';
import './Key.css';
import {WordleContext} from './App';

export default function Key({keyValue}) {

    const {greenKeys, yellowKeys, disabledKeys, enterSelected, deleteSelected, letterSelected} = useContext(WordleContext);
    let color = '';
    if (greenKeys.includes(keyValue)) {
        color = 'green';
    } else if (yellowKeys.includes(keyValue)) {
        color = 'yellow';
    } else if (disabledKeys.includes(keyValue)) {
        color = "white"
    }

    function keySelected() {
        if (keyValue === "ENTER") {
            enterSelected();
        } else if (keyValue === "DEL") {
            deleteSelected();
        } else {
            letterSelected(keyValue);
        }
    };


    return (<div className="key" id={color} onClick={keySelected}>{keyValue}</div>);
}