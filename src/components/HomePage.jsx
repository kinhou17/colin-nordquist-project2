import React from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";
import wordlePic from "../wordlePic.jpeg";

export default function HomePage() {

    function refreshPage() {
        window.location.reload();
    }

    return (
        <div className="homePage">
            <div id="title">
                Welcome to Wordle!
                <br></br>
                <br></br>
                Below you may click a difficulty to begin a game,
                <br></br>
                or instructions to learn how to play.
                <br></br>
                Anytime you want to return to this home page,
                <br></br>
                click the title at the top of the page.
                <br></br>
                <img src={wordlePic}></img>
                <br></br>
                <br></br>
                Let's Play!
            </div>
            <Link to={"/game/easy"}>
                <button className="gameButton" onClick={() => { window.location.href = "/game/easy" }}>
                    EASY
                </button>
            </Link>
            <Link to={"/game/medium"}>
                <button className="gameButton" onClick={() => { window.location.href = "/game/medium" }}>
                    MEDIUM
                </button>
            </Link>
            <Link to={"/game/hard"}>
                <button className="gameButton" onClick={() => { window.location.href = "/game/hard" }}>
                    HARD
                </button>
            </Link>
            <Link to={"/instructions"}>
                <button className="gameButton" id={"instructions"}>
                    INSTRUCTIONS
                </button>
            </Link>
        </div>
    );
}