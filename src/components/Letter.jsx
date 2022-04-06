import React, {useContext} from 'react';
import { Context } from './App';


export default function Letter({letterPosition, attemptedValue}) {
    const { board } = useContext(Context);
    const letter = board[attemptedValue][letterPosition];


    return (
        <div className="letter" > {letter} </div>
    );
}