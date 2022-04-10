import React, {useContext} from 'react';
import './Key.css';
import {WordleContext} from './App';

export default function Key({keyVal}) {

    const {greenKeys, yellowKeys, disabledKeys} = useContext(WordleContext);
    let color = '';
    if (greenKeys.includes(keyVal)) {
        color = 'green';
    } else if (yellowKeys.includes(keyVal)) {
        color = 'yellow';
    } else if (disabledKeys.includes(keyVal)) {
        color = "white"
    }

    return (<div className="key" id={color}>{keyVal}</div>);
}