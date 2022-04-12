import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';


export default function Header() {



    return (<div className="header">
        <nav>
            <Link className='link' to={"/"}>

                <h1>Wordle</h1>
            </Link>
        </nav>
    </div>
    );
}