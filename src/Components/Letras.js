import "./Letras.css"

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras(props){
    const tentarLetra = props.tentarLetra
    const letrasEscolhidas = props.letrasEscolhidas

    return(
        <div className="letras">
            {alfabeto.map(elm => 
            <button 
                key={elm} 
                disabled={letrasEscolhidas.includes(elm) ? true:props.abilitar} 
                className="btn-let" 
                onClick={() => tentarLetra(elm)} >{elm.toUpperCase()}
            </button>)}
        </div>
    )
}