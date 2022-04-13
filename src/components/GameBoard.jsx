import LetterTile from "./LetterTile";
import React, { useContext } from 'react';
import { WordleContext } from './App';

export default function Board() {

    const { difficulty } = useContext(WordleContext);

    return (
        <div className="board">
            <div className="row">
                <LetterTile letterIndex={0} guess={0} />
                <LetterTile letterIndex={1} guess={0} />
                <LetterTile letterIndex={2} guess={0} />
                <LetterTile letterIndex={3} guess={0} />
                <LetterTile letterIndex={4} guess={0} />
                {(difficulty === "hard" || difficulty === "medium") &&
                    <LetterTile letterIndex={5} guess={0} />
                }
                {difficulty === "hard" &&
                    <LetterTile letterIndex={6} guess={0} />
                }
            </div>
            <div className="row">
                <LetterTile letterIndex={0} guess={1} />
                <LetterTile letterIndex={1} guess={1} />
                <LetterTile letterIndex={2} guess={1} />
                <LetterTile letterIndex={3} guess={1} />
                <LetterTile letterIndex={4} guess={1} />
                {(difficulty === "hard" || difficulty === "medium") &&
                    <LetterTile letterIndex={5} guess={1} />
                }
                {difficulty === "hard" &&
                    <LetterTile letterIndex={6} guess={1} />
                }
            </div>
            <div className="row">
                <LetterTile letterIndex={0} guess={2} />
                <LetterTile letterIndex={1} guess={2} />
                <LetterTile letterIndex={2} guess={2} />
                <LetterTile letterIndex={3} guess={2} />
                <LetterTile letterIndex={4} guess={2} />
                {(difficulty === "hard" || difficulty === "medium") &&
                    <LetterTile letterIndex={5} guess={2} />
                }
                {difficulty === "hard" &&
                    <LetterTile letterIndex={6} guess={2} />
                }
            </div>
            <div className="row">
                <LetterTile letterIndex={0} guess={3} />
                <LetterTile letterIndex={1} guess={3} />
                <LetterTile letterIndex={2} guess={3} />
                <LetterTile letterIndex={3} guess={3} />
                <LetterTile letterIndex={4} guess={3} />
                {(difficulty === "hard" || difficulty === "medium") &&
                    <LetterTile letterIndex={5} guess={3} />
                }
                {difficulty === "hard" &&
                    <LetterTile letterIndex={6} guess={3} />
                }
            </div>
            <div className="row">
                <LetterTile letterIndex={0} guess={4} />
                <LetterTile letterIndex={1} guess={4} />
                <LetterTile letterIndex={2} guess={4} />
                <LetterTile letterIndex={3} guess={4} />
                <LetterTile letterIndex={4} guess={4} />
                {(difficulty === "hard" || difficulty === "medium") &&
                    <LetterTile letterIndex={5} guess={4} />
                }
                {difficulty === "hard" &&
                    <LetterTile letterIndex={6} guess={4} />
                }
            </div>
            {(difficulty === "easy" || difficulty === "medium") &&
                <div className="row">
                    <LetterTile letterIndex={0} guess={5} />
                    <LetterTile letterIndex={1} guess={5} />
                    <LetterTile letterIndex={2} guess={5} />
                    <LetterTile letterIndex={3} guess={5} />
                    <LetterTile letterIndex={4} guess={5} />
                    {difficulty === "medium" &&
                        <LetterTile letterIndex={5} guess={5} />
                    }
                </div>
            }
            {difficulty === "easy" &&
                <div className="row">
                    <LetterTile letterIndex={0} guess={6} />
                    <LetterTile letterIndex={1} guess={6} />
                    <LetterTile letterIndex={2} guess={6} />
                    <LetterTile letterIndex={3} guess={6} />
                    <LetterTile letterIndex={4} guess={6} />
                </div>
            }
        </div>
    );
}

export const startingBoardEasy = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

export const boardColorsEasy = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

export const startingBoardMedium = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
];

export const boardColorsMedium = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
];

export const startingBoardHard = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
];

export const boardColorsHard = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
];