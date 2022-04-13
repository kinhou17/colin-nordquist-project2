import Letter from "./Letter";
import React, { useContext } from 'react';
import { WordleContext } from './App';

export default function Board() {

    const { difficulty } = useContext(WordleContext);

    return (
        <div className="board">
            <div className="row">
                <Letter letterIndex={0} guess={0} />
                <Letter letterIndex={1} guess={0} />
                <Letter letterIndex={2} guess={0} />
                <Letter letterIndex={3} guess={0} />
                <Letter letterIndex={4} guess={0} />
                {(difficulty === "hard" || difficulty === "medium") &&
                    <Letter letterIndex={5} guess={0} />
                }
                {difficulty === "hard" &&
                    <Letter letterIndex={6} guess={0} />
                }
            </div>
            <div className="row">
                <Letter letterIndex={0} guess={1} />
                <Letter letterIndex={1} guess={1} />
                <Letter letterIndex={2} guess={1} />
                <Letter letterIndex={3} guess={1} />
                <Letter letterIndex={4} guess={1} />
                {(difficulty === "hard" || difficulty === "medium") &&
                    <Letter letterIndex={5} guess={1} />
                }
                {difficulty === "hard" &&
                    <Letter letterIndex={6} guess={1} />
                }
            </div>
            <div className="row">
                <Letter letterIndex={0} guess={2} />
                <Letter letterIndex={1} guess={2} />
                <Letter letterIndex={2} guess={2} />
                <Letter letterIndex={3} guess={2} />
                <Letter letterIndex={4} guess={2} />
                {(difficulty === "hard" || difficulty === "medium") &&
                    <Letter letterIndex={5} guess={2} />
                }
                {difficulty === "hard" &&
                    <Letter letterIndex={6} guess={2} />
                }
            </div>
            <div className="row">
                <Letter letterIndex={0} guess={3} />
                <Letter letterIndex={1} guess={3} />
                <Letter letterIndex={2} guess={3} />
                <Letter letterIndex={3} guess={3} />
                <Letter letterIndex={4} guess={3} />
                {(difficulty === "hard" || difficulty === "medium") &&
                    <Letter letterIndex={5} guess={3} />
                }
                {difficulty === "hard" &&
                    <Letter letterIndex={6} guess={3} />
                }
            </div>
            <div className="row">
                <Letter letterIndex={0} guess={4} />
                <Letter letterIndex={1} guess={4} />
                <Letter letterIndex={2} guess={4} />
                <Letter letterIndex={3} guess={4} />
                <Letter letterIndex={4} guess={4} />
                {(difficulty === "hard" || difficulty === "medium") &&
                    <Letter letterIndex={5} guess={4} />
                }
                {difficulty === "hard" &&
                    <Letter letterIndex={6} guess={4} />
                }
            </div>
            {(difficulty === "easy" || difficulty === "medium") &&
                <div className="row">
                    <Letter letterIndex={0} guess={5} />
                    <Letter letterIndex={1} guess={5} />
                    <Letter letterIndex={2} guess={5} />
                    <Letter letterIndex={3} guess={5} />
                    <Letter letterIndex={4} guess={5} />
                    {difficulty === "medium" &&
                        <Letter letterIndex={5} guess={5} />
                    }
                </div>
            }
            {difficulty === "easy" &&
                <div className="row">
                    <Letter letterIndex={0} guess={6} />
                    <Letter letterIndex={1} guess={6} />
                    <Letter letterIndex={2} guess={6} />
                    <Letter letterIndex={3} guess={6} />
                    <Letter letterIndex={4} guess={6} />
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