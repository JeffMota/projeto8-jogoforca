import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras"
import palavras from "./palavras"
import { useState } from "react";

import "./App.css"


function App() {
  const [disable, setDisable] = useState(true)

  const [palavra, setPalavra] = useState('')
  const [array, setArray] = useState([])

  const j = []


  function escolherPalavra() {
    setArray([])
    const escolha = palavras[Math.floor(Math.random() * palavras.length)]

    alert(escolha)

    setPalavra(escolha)
    setDisable(false)

    let aux = escolha.split('')

    for (let i = 0; i < aux.length; i++) {
      j.push('_')
      setArray(j)
    }

  }
  let aux = [...array]
  function tentarLetra(letra) {
    
    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] == letra) {
        aux[i]=letra
      } else {
        if(aux[i] == '_'){
          aux[i] = '_'
        }
      }

    }
    setArray(aux)
  }


  return (
    <div className="app">
      <Jogo array={array} estadoBotoes={setDisable} escolherPalavra={escolherPalavra} />
      <Letras abilitar={disable} tentarLetra={tentarLetra} />
    </div>
  );
}

export default App;
