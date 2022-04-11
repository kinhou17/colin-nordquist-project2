import React, { useState } from 'react';

import wordBank from "../5letterWordBank.txt";
import scrabbleDict from "../scrabbleDictionary.txt";


export const generateWordSet = async () => {
    let wordSet;
    let currWord;
    await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => { 
            const wordArray = result.split("\n")
            currWord = wordArray[Math.floor(Math.random() * wordArray.length)];
            wordSet = new Set(wordArray);
        });

    return {currWord, wordSet};
}


export const generateDictionary = async () => {
    let dictSet;
    await fetch(scrabbleDict)
        .then((response) => response.text())
        .then((result) => { 
            const dictArray = result.replaceAll("\r", "").split("\n");
            dictSet = new Set(dictArray);
        });

    return {dictSet};
}