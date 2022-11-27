import './Jogo.css'


export default function Jogo(props) {
    const array = props.array
    const escolherPalavra = props.escolherPalavra
    const img = `assets/forca${props.img}.png`
    const resultado = props.resultado

    return (
        <div className="jogo">
            <img data-test="game-image" className="img-forca" src={img} alt="img-forca"></img>
            <div className="palavra-box">
                <button data-test="choose-word" className="btn-init" onClick={escolherPalavra}>Escolher Palavra</button>
                <div data-test="word" data-answer={props.palavra} className={'palavra '+ resultado} >{array}</div>
            </div>
        </div>
    )
}