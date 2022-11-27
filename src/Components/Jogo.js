import './Jogo.css'


export default function Jogo(props) {
    const array = props.array
    const escolherPalavra = props.escolherPalavra
    const img = `assets/forca${props.img}.png`
    const resultado = props.resultado

    return (
        <div className="jogo">
            <img className="img-forca" src={img} alt="img-forca"></img>
            <div className="palavra-box">
                <button className="btn-init" onClick={escolherPalavra}>Escolher Palavra</button>
                <div className={'palavra '+ resultado} >{array}</div>
            </div>
        </div>
    )
}