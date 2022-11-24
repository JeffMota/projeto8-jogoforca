import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras"
import palavras from "./palavras"
import { useState } from "react";

import "./App.css"


function App() {
  const [disable, setDisable] = useState(true)

  return (
    <div className="app">
      <Jogo palavras={palavras} estadoBotoes={setDisable}/>
      <Letras abilitar={disable}/>
    </div>
  );
}

export default App;
