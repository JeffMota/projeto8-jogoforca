import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras"
import palavras from "./palavras"
import { useState } from "react";

import "./App.css"
import Chute from "./Components/Chute";
let letrasEscolhidas = []
let erro = 0
let letrasCertas = []
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


function App() {
  const [disable, setDisable] = useState(true)

  const [palavra, setPalavra] = useState('')
  const [array, setArray] = useState([])
  const [resultado, setResultado] = useState('')
  const [chute, setChute] = useState('')
  const [img, setImg] = useState(0)

  const j = []
  let aux = [...array]

  function escolherPalavra() {
    setArray([])
    setImg(0)
    letrasEscolhidas = []
    erro = 0
    letrasCertas = []
    setResultado('')

    const escolha = palavras[Math.floor(Math.random() * palavras.length)]

    setPalavra(escolha)
    setDisable(false)

    let aux = escolha.split('')

    for (let i = 0; i < aux.length; i++) {
      j.push('_')
      setArray(j)
    }
    alert(escolha)
  }

  function tentarLetra(letra) {

    //Checar se a letra existe
    if (palavra.includes(letra)) {
      for (let i = 0; i < palavra.length; i++) {
        //Se a letra estiver correta
        if (palavra[i] == letra) {
          letrasEscolhidas.push(letra)
          letrasCertas.push(letra)

          aux[i] = letra
        }
      }
    } else {
      erro++
      setImg(erro)
      letrasEscolhidas.push(letra)
    }

    //Se errar seis vezes
    if (erro == 6) {
      setArray(palavra.split(''))
      setResultado('errado')
      letrasEscolhidas = alfabeto;
      return
    }

    //Checando se a palavra confere
    if (letrasCertas.length == palavra.length) {
      if (checarPalavra(letrasCertas)) {
        letrasEscolhidas = alfabeto;
        setResultado('certo')
        setDisable(true)
      }

    }

    setArray(aux)
  }

  function checarPalavra(letrasEscolhidas) {
    let result = true
    for (let i = 0; i < letrasEscolhidas.length; i++) {
      if (palavra.includes(letrasEscolhidas[i])) {

      } else result = false
    }
    return result
  }

  function chutarPalavra(chute){
    if(chute == palavra){
      letrasEscolhidas = alfabeto
      setResultado('certo')
      setArray(palavra)
      setDisable(true)
    }else {
      letrasEscolhidas = alfabeto
      setResultado('errado')
      setArray(palavra)
      setDisable(true)
      setImg(6)
    }
    setChute('')
  }


  return (
    <div className="app">
      <Jogo resultado={resultado} img={img} array={array} palavra={palavra} estadoBotoes={setDisable} escolherPalavra={escolherPalavra} />
      <Letras abilitar={disable} tentarLetra={tentarLetra} letrasEscolhidas={letrasEscolhidas} />
      <Chute abilitar={disable} setChute={setChute} chutarPalavra={chutarPalavra} chute={chute}/>
    </div>
  );
}

export default App;
