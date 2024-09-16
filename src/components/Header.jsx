import trollFace from '../assets/Troll-Face.png';

export default function Header() {
    return (
        <header className='header'>
            <img src={trollFace} alt="Troll Face" className='header--image'/>
            <h2 className='header--title'>Meme Generator</h2>
            <span className='header--project'>React Course - Project 3</span>
        </header>
    );
}