import { useState } from "react"
import './Jogo.css'

export default function Jogo(props){
    const palavras = props.palavras

    const [palavra, setPalavra] = useState('_____')

    function escolherPalavra(){
        setPalavra(palavras[Math.floor(Math.random()*palavras.length)])
    }

    return(
        <div className="jogo">
            <img className="img-forca" src="assets/forca0.png" alt="img-forca"></img>
            <div className="palavra-box">
                <button className="btn-init" onClick={escolherPalavra}>Escolher Palavra</button>
                <div className="palavra">{palavra}</div>
            </div>
        </div>
    )
}