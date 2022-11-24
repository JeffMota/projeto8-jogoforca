import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras"
import palavras from "./palavras"
import { useState } from "react";

import "./App.css"

function App() {
  const [enable, setEnable] = useState('disabled')

  return (
    <div className="app">
      <Jogo palavras={palavras}/>
      <Letras abilitar={enable}/>
    </div>
  );
}

export default App;
