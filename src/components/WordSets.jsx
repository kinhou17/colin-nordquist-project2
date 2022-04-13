import wordBank5Letters from "../wordBanks/5letterWordBank.txt";
import wordBank6Letters from "../wordBanks/6letterWordBank.txt";
import wordBank7Letters from "../wordBanks/7letterWordBank.txt";
import scrabbleDict from "../wordBanks/scrabbleDictionary.txt";

export const createWordSet = async (difficulty) => {
    let winningWordSet;
    let currWord;
    if (difficulty === "easy") {
        await fetch(wordBank5Letters)
            .then((response) => response.text())
            .then((result) => {
                const wordArray = result.split("\n");
                winningWordSet = new Set(wordArray);
                currWord = wordArray[Math.floor(Math.random() * wordArray.length)];
            });
        return { currWord, winningWordSet };
    } else if (difficulty === "medium") {
        await fetch(wordBank6Letters)
            .then((response) => response.text())
            .then((result) => {
                const wordArray = result.split("\n");
                winningWordSet = new Set(wordArray);
                currWord = wordArray[Math.floor(Math.random() * wordArray.length)];
            });
        return { currWord, winningWordSet };
    } else {
        await fetch(wordBank7Letters)
            .then((response) => response.text())
            .then((result) => {
                const wordArray = result.split("\n");
                winningWordSet = new Set(wordArray);
                currWord = wordArray[Math.floor(Math.random() * wordArray.length)];
            });
        return { currWord, winningWordSet };
    }
}

export const createDictionarySet = async () => {
    let dictSet;
    await fetch(scrabbleDict)
        .then((response) => response.text())
        .then((result) => {
            const dictArray = result.replaceAll("\r", "").split("\n");
            dictSet = new Set(dictArray);
        });

    return { dictSet };
}