import React from 'react';

export default function Meme() {

    const id = React.useId();
    const [allMemes, setAllMemes] = React.useState({});

    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "walk into Mordor",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    React.useEffect(() => {
        async function getMemes() {
            const response = await fetch("https://api.imgflip.com/get_memes");
            const data = await response.json();
            setAllMemes(data.data.memes);
        }
        getMemes();
    }, [])

    function getMemeImage() {
        setMeme({
            ...meme,
            randomImage: allMemes[Math.floor(Math.random() * allMemes.length)].url
        });
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        });
    }

    return (
        <main>
            <div className='form'>
                <div className='form--firstLine'>
                    <div className='form--entry'>
                        <input 
                            type='text'
                            className="form--input"
                            name='topText' 
                            id={id + '-topText'}
                            onChange={handleChange}
                            value={meme.topText}
                            required
                        />
                        <label htmlFor={id + '-topText'} className='form--label'>Top Text</label>
                    </div>
                    <div className='form--entry'>                        
                        <input
                            type='text' 
                            className="form--input"
                            name='bottomText' 
                            id={id + '-bottomText'}
                            onChange={handleChange}
                            value={meme.bottomText}
                            required
                        />
                        <label htmlFor={id + '-bottomText'} className='form--label'>Bottom Text</label>                  
                    </div>
                </div>
                
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img 
                    src={meme.randomImage} 
                    alt="Meme" 
                    className='meme--image'
                />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
        
        
    )
}