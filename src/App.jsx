import { useState } from "react"
function App(){
  const [nome, setNome] = useState('Ronaldo')
 
  const Formulario = (props) => {
    return (
      <div>
       
      <input placeholder={props.sombra} className="Nome" type="text" name="nome" onChange={(e)=>{setNome(e.target.value)}}/>
 
      <button onClick={()=>{(props.mensagem !=null)? alert("TEXTO PADRAO") }} className="Botao">
      {(props.textoBotao !=null) ? props.textoBotao : "Clique aqui"}
      </button>
      </div>
    );
 
  };
 
 
  return (
    <div>
      <h3>Pizzaria 2C</h3>
      <Formulario sombra="Digite seu nome..." textoBotao="ENVIAR NOME"/>
      <Formulario sombra="digite seu e-mail..."textoBotao="E-MAIL"/>
      <Formulario  sombra="(11) 90000-000" textoBotao="CELULAR"/>
      <Formulario  smensagem="mensagem enviada pelo app"textoBotao="E-MAIL"/>
      <Formulario />
      <Formulario />
 
    </div>
  )
}
export default App
 
 