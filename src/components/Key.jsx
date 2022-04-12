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
        color = "disabled"
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


    return (<div className="key" id={keyValue === "ENTER" || keyValue === "DEL" ? "large" : color} onClick={keySelected}>{keyValue}</div>);
}