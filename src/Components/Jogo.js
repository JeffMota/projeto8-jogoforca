import { useState } from "react"
import './Jogo.css'


export default function Jogo(props) {
    const array = props.array
    const escolherPalavra = props.escolherPalavra

    return (
        <div className="jogo">
            <img className="img-forca" src="assets/forca0.png" alt="img-forca"></img>
            <div className="palavra-box">
                <button className="btn-init" onClick={escolherPalavra}>Escolher Palavra</button>
                <div className="palavra" >{array}</div>
            </div>
        </div>
    )
}