import trollface from '../troll-face.png';

export default function Header(){
    return (
        <header className="header">
            <img src={trollface} alt="Troll Face" className="logo" />
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React Project</h4>
        </header>
    )
}