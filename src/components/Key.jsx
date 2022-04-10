import React, {useContext} from 'react';
import './Key.css';
import {WordleContext} from './App';

export default function Key({keyVal}) {

    const {greenKeys} = useContext(WordleContext);
    let color = '';
    if (greenKeys.includes(keyVal)) {
        color = 'green';
    }

    return (<div className="key" id={color}>{keyVal}</div>);
}