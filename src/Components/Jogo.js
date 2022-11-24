import { useState } from "react"
import './Jogo.css'


export default function Jogo(props) {
    const [palavra, setPalavra] = useState('')
    const [array, setArray] = useState([])

    const palavras = props.palavras
    const j = []


    function escolherPalavra() {
        setArray([])
        const escolha = palavras[Math.floor(Math.random() * palavras.length)]

        alert(escolha)

        setPalavra(escolha)
        props.estadoBotoes(false)

        const aux = escolha.split('')

        for(let i = 0; i<aux.length; i++){
            j.push('_')
            setArray(j)
        }

    }

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