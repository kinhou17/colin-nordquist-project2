import React, {useContext} from 'react';
import './Key.css';
import {WordleContext} from './App';

export default function Key({keyVal}) {

    const {greenLetters} = useContext(WordleContext);
    let color = '';
    if (greenLetters.includes(keyVal)) {
        color = 'green';
    }

    return (<div className="key" id={color}>{keyVal}</div>);
}