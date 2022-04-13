import React, { useState } from 'react';

import wordBank5 from "../wordBanks/5letterWordBank.txt";
import wordBank6 from "../wordBanks/6letterWordBank.txt";
import wordBank7 from "../wordBanks/7letterWordBank.txt";
import scrabbleDict from "../wordBanks/scrabbleDictionary.txt";


export const generateWordSet = async (difficulty) => {
    let wordSet;
    let currWord;
    if (difficulty === "easy") {
        await fetch(wordBank5)
            .then((response) => response.text())
            .then((result) => {
                const wordArray = result.split("\n")
                currWord = wordArray[Math.floor(Math.random() * wordArray.length)];
                wordSet = new Set(wordArray);
            });
        return { currWord, wordSet };
    } else if (difficulty === "medium") {
        await fetch(wordBank6)
            .then((response) => response.text())
            .then((result) => {
                const wordArray = result.split("\n")
                currWord = wordArray[Math.floor(Math.random() * wordArray.length)];
                wordSet = new Set(wordArray);
            });
        return { currWord, wordSet };

    } else {
        await fetch(wordBank7)
            .then((response) => response.text())
            .then((result) => {
                const wordArray = result.split("\n")
                currWord = wordArray[Math.floor(Math.random() * wordArray.length)];
                wordSet = new Set(wordArray);
            });
        return { currWord, wordSet };
    }
}


export const generateDictionary = async () => {
    let dictSet;
    await fetch(scrabbleDict)
        .then((response) => response.text())
        .then((result) => {
            const dictArray = result.replaceAll("\r", "").split("\n");
            dictSet = new Set(dictArray);
        });

    return { dictSet };
}