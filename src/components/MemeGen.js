import React from "react";

import memesArray from '../memes'

export default function MemeGen() {

    const [memeImage, setMemeImage] = React.useState({
        topText: '',
        bottomText:'',
        randomImage:'http://i.imgflip.com/1bij.jpg',
    })

    const [allMemes, setAllMemes] = React.useState(memesArray)

    function getRandomMeme() {
        
        const memes =  allMemes.data.memes;
        const randomN = Math.floor(Math.random() * memes.length);
        // () required for an implicit return in arrow functions
        setMemeImage(prevMemeImage => ({
            ...prevMemeImage,
            randomImage: memes[randomN].url
            })) 
        console.log(memeImage)
    }

    return (
        <main>
            <div className="input-wrap">
                <input type="text" placeholder="Top Text"/>
                <input type="text" placeholder="Bottom Text"/>
            </div>
            <button onClick={getRandomMeme}>Get a new meme template 🖼</button>
            <img className="meme-img" src={memeImage.randomImage} alt="" />
        </main>
    )
}