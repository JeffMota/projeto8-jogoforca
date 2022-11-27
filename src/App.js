import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras"
import palavras from "./palavras"
import { useState } from "react";

import "./App.css"
let letrasEscolhidas = []
let erro = 0
let letrasCertas = []
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


function App() {
  const [disable, setDisable] = useState(true)

  const [palavra, setPalavra] = useState('')
  const [array, setArray] = useState([])
  const [resultado, setResultado] = useState('')

  const [img, setImg] = useState(0)

  const j = []

  function escolherPalavra() {
    setArray([])
    setImg(0)
    letrasEscolhidas = []
    erro = 0
    letrasCertas = []
    setResultado('')

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

    console.log('Letras certas:', letrasCertas)
    console.log('erro: ', erro)

    //Se errar seis vezes
    if (erro == 6) {
      alert('perdeu')
      setArray(palavra.split(''))
      setResultado('errado')
      letrasEscolhidas = alfabeto;
      return
    }

    //Checando se a palavra confere
    if (letrasCertas.length == palavra.length) {
      if (checarPalavra(letrasCertas)) {
        alert('acertou')
        letrasEscolhidas = alfabeto;
        setResultado('certo')
      } else {
        alert('não parebens')
        letrasEscolhidas = alfabeto;
        setResultado('errado')
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


  return (
    <div className="app">
      <Jogo resultado={resultado} img={img} array={array} estadoBotoes={setDisable} escolherPalavra={escolherPalavra} />
      <Letras abilitar={disable} tentarLetra={tentarLetra} letrasEscolhidas={letrasEscolhidas} />
    </div>
  );
}

export default App;
