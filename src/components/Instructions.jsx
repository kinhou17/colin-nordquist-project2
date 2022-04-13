import React from 'react';
import "./Instructions.css";
import { Link } from 'react-router-dom';
// import winExample from "../images/winExample.png";
import gameExample from "../images/gameExample (2).png";

export default function Instructions() {

    return (
        <div>
            <div className="instructions">
                <div id="howToPlay">HOW TO PLAY</div>
                <div className="container">
                    <img src={gameExample}></img>
                    <div id="description">
                        <div>Here is an example of a game being played.</div>
                        <div>Try to guess the word! In this game the winning word is THORN.</div>
                        <div>The length of the word and number of attempts varies based on difficulty selected as follows:</div>
                        <ul>
                            <li>EASY: 5 letter words, 7 guess opportunities</li>
                            <li>MEDIUM: 6 letter words, 6 guess opportunities</li>
                            <li>HARD: 7 letter words, 5 guess opportunities</li>
                        </ul>
                        <div>After each guess, the letters in your guess change color.</div>
                        <br></br>
                        <div>GREEN letters are in the word and in the correct spot.</div>
                        <div>YELLOW letters are in the word and in the wrong spot.</div>
                        <div>GREY letters are not in the word in any spot.</div>
                        <br></br>
                        <div>When this user hits enter, they will win!</div>
                        <Link to={"/game/easy"}>
                            <button className="easyGameButton" onClick={() => { window.location.href = "/game/easy" }}>
                                Click to try an EASY game!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}