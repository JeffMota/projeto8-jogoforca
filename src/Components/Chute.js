import './Chute.css'

export default function Chute(props) {
    const setChute = props.setChute
    const chutarPalavra = props.chutarPalavra

    return (
        <div className="chute-box">
            <p>Já sei a palavra!</p>
            <input
                onChange={(e) => setChute(e.target.value)}
                disabled={props.abilitar}
                value={props.chute}>
            </input>
            <button
                disabled={props.abilitar}
                onClick={() => chutarPalavra(props.chute)}>Chutar
            </button>
        </div>
    )
}