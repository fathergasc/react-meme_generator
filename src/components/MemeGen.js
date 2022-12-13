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

    function handleChange(event) {
        const {name, value} = event.target
        setMemeImage(prevMemeImage => ({
            ...prevMemeImage,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="input-wrap">
                <input type="text" placeholder="Top Text" name="topText" value={memeImage.topText} onChange={handleChange}/>
                <input type="text" placeholder="Bottom Text" name="bottomText" value={memeImage.bottomText}onChange={handleChange}/>
            </div>
            <button onClick={getRandomMeme}>Get a new meme template 🖼</button>
            <bottom className="meme">
                <img className="meme-img" src={memeImage.randomImage} alt="" />
                <h2 className="meme-text top">{memeImage.topText}</h2>
                <h2 className="meme-text bottom">{memeImage.bottomText}</h2>
            </bottom>
            
        </main>
    )
}