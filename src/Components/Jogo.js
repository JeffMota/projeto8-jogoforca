import { useState } from "react"

export default function Jogo(props){
    const palavras = props.palavras

    const [palavra, setPalavra] = useState('_____')

    function escolherPalavra(){
        setPalavra(palavras[Math.floor(Math.random()*palavras.length)])
    }

    return(
        <>
            <img src="assets/forca0.png" alt="img-forca"></img>
            <div>
                <button onClick={escolherPalavra}>Escolher Palavra</button>
                <div>{palavra}</div>
            </div>
        </>
    )
}