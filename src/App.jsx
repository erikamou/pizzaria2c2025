
import { useState} from "react"

function App(){

  const[nome, setNome] = useState('ronaldo')

  return (
    <div>
      <h3>pizzaria 2c</h3>
    <input 
    classname="nome" 
    onChange={(e)=>{setNome(e.target.value)}}
    name="nome"
    type="text" />
    <button
    onClick={()=> {alert(nome)}}
    classname="botao">
    CLIQUE AQUI
    </button>
    </div>
  )
}

export default App