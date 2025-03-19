
import { useState} from "react"

function App(){

  const[nome, setNome] = useState('ronaldo')

const Formulario = () => {

  return (
    <div>
    
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
}
const Formulario = () => {


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

  return (
    <div>
      <h3>pazzaria2c</h3>
      <formulario/>
      <formulario/>
      <formulario/>
    </div>
  )

export default App