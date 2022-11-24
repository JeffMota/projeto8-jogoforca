import "./Letras.css"

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras(){
    return(
        <div className="letras">
            {alfabeto.map(elm => <button className="btn-let" >{elm.toUpperCase()}</button>)}
        </div>
    )
}