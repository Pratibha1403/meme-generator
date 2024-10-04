// import MemesData from "../MemesData"
// import React, { useState } from 'react';


// export default function Meme() {

//     const [memeImage, setMemeImage] = useState("yes")
//     // alert(memeImage, setMemeImage)

//     function GetMeme (){
//         const memesArray = MemesData.data.memes
//         const randomNumber = Math.floor(Math.random() * memesArray.length)
//         setMemeImage(memesArray[randomNumber].url)
//         alert(memeImage)
//         // const url = memesArray[randomNumber].url
//         // alert(url)
//     }
//     return (
//         <main>
//             <form className="form">
//                 <input type="text" className="form-input" placeholder="Top Text"/>
//                 <input type="text" className="form-input" placeholder="Bottom Text"/>
//                 <button className="form-button" onClick={GetMeme}>Get a New Meme Image</button>
//             </form>
//             {/* <div>
//                 <img src={memeImage} />
//             </div> */}
//         </main>
//     )
// }

// import MemesData from "../MemesData";
import React, { useState, useEffect } from 'react';

export default function Meme() {
    // const [memeImage, setMemeImage] = useState("https://i.imgflip.com/176h0h.jpg");
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/176h0h.jpg"
    })

    const [allMeme, setAllMeme] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMeme(data.data.memes))

    }, [])

    function GetMeme(event) {
        event.preventDefault(); 

        const randomNumber = Math.floor(Math.random() * allMeme.length);
        const url = allMeme[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
       
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <form className="form">
                <input type="text" className="form-input" placeholder="Top Text" name="topText" value={meme.topText} onChange={handleChange}/>
                <input type="text" className="form-input" placeholder="Bottom Text" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
                <button className="form-button" onClick={GetMeme}>Get a New Meme Image</button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} alt="Meme" className="meme-image"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    );
    
        
      
}

// function toggle(id){
//     setSquares(prevSquares => {
//         return prevSquares.map((square) => {
//             return square.id === id ? (...square, on: !square.on) :  square
//         })
//     })
// }    
