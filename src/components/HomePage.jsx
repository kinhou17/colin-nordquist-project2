import React from 'react';
import { Link } from 'react-router-dom';


export default function HomePage() {



    return (
        <div>
            This is my HomePage
            <Link to={"/game/easy"}>
                <button>
                EASY
                </button>
            </Link>
            <Link to={"/game/medium"}>
                <button>
                MEDIUM
                </button>
            </Link>
            <Link to={"/game/hard"}>
                <button>
                HARD
                </button>
            </Link>
            <Link to={"/instructions"}>
                <button>
                INSTRUCTIONS
                </button>
            </Link>
        </div>
    );
}