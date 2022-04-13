import Letter from "./Letter";
import React, { useContext } from 'react';
import { WordleContext } from './App';


export default function Board() {

    const { difficulty } = useContext(WordleContext);

    return (
        <div className="board">
            <div className="row">
                <Letter letterIndex={0} attempt={0} />
                <Letter letterIndex={1} attempt={0} />
                <Letter letterIndex={2} attempt={0} />
                <Letter letterIndex={3} attempt={0} />
                <Letter letterIndex={4} attempt={0} />
                {(difficulty === "hard" || difficulty === "medium") &&
                    <Letter letterIndex={5} attempt={0} />
                }
                {difficulty === "hard" &&
                    <Letter letterIndex={6} attempt={0} />
                }
            </div>

            <div className="row">
                <Letter letterIndex={0} attempt={1} />
                <Letter letterIndex={1} attempt={1} />
                <Letter letterIndex={2} attempt={1} />
                <Letter letterIndex={3} attempt={1} />
                <Letter letterIndex={4} attempt={1} />
                {(difficulty === "hard" || difficulty === "medium") &&
                    <Letter letterIndex={5} attempt={1} />
                }
                {difficulty === "hard" &&
                    <Letter letterIndex={6} attempt={1} />
                }
            </div>

            <div className="row">
                <Letter letterIndex={0} attempt={2} />
                <Letter letterIndex={1} attempt={2} />
                <Letter letterIndex={2} attempt={2} />
                <Letter letterIndex={3} attempt={2} />
                <Letter letterIndex={4} attempt={2} />
                {(difficulty === "hard" || difficulty === "medium") &&
                    <Letter letterIndex={5} attempt={2} />
                }
                {difficulty === "hard" &&
                    <Letter letterIndex={6} attempt={2} />
                }
            </div>

            <div className="row">
                <Letter letterIndex={0} attempt={3} />
                <Letter letterIndex={1} attempt={3} />
                <Letter letterIndex={2} attempt={3} />
                <Letter letterIndex={3} attempt={3} />
                <Letter letterIndex={4} attempt={3} />
                {(difficulty === "hard" || difficulty === "medium") &&
                    <Letter letterIndex={5} attempt={3} />
                }
                {difficulty === "hard" &&
                    <Letter letterIndex={6} attempt={3} />
                }
            </div>

            <div className="row">
                <Letter letterIndex={0} attempt={4} />
                <Letter letterIndex={1} attempt={4} />
                <Letter letterIndex={2} attempt={4} />
                <Letter letterIndex={3} attempt={4} />
                <Letter letterIndex={4} attempt={4} />
                {(difficulty === "hard" || difficulty === "medium") &&
                    <Letter letterIndex={5} attempt={4} />
                }
                {difficulty === "hard" &&
                    <Letter letterIndex={6} attempt={4} />
                }
            </div>

            {(difficulty === "easy" || difficulty === "medium") &&
                <div className="row">
                    <Letter letterIndex={0} attempt={5} />
                    <Letter letterIndex={1} attempt={5} />
                    <Letter letterIndex={2} attempt={5} />
                    <Letter letterIndex={3} attempt={5} />
                    <Letter letterIndex={4} attempt={5} />
                    {difficulty === "medium" &&
                        <Letter letterIndex={5} attempt={5} />
                    }
                </div>
            }

            {difficulty === "easy" &&
                <div className="row">
                    <Letter letterIndex={0} attempt={6} />
                    <Letter letterIndex={1} attempt={6} />
                    <Letter letterIndex={2} attempt={6} />
                    <Letter letterIndex={3} attempt={6} />
                    <Letter letterIndex={4} attempt={6} />
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