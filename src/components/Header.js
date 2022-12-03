import React from "react";

import trollface from '../img/troll-face.png'

export default function Header() {
    return (
        <header>
            <img src={trollface} alt="" />
            <span>Meme Generator</span>
        </header>
    )
}