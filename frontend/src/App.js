import { useState } from "react";
import Botao from "./exemplos/UI/Button";
function App() {
  // useState explicado
  const [variavel,FunctionParaMudarAVariavel] = useState("Valor inicial")
  const [boolean,setBoolean] = useState(false)
  const [numero,setNumero] = useState(0)
  const [lista,setLista] = useState([])
  const [objeto, setObj] = useState({nome: "obj",quantidade: 14,entendeu: false})
  const [logado,setLogado] = useState(false);

  function alterarValor (){
    FunctionParaMudarAVariavel("Alterei")
  }
  const Logar = ()=>{
    setLogado(true);
  }

  const Deslogar=()=>{
    setLogado(false);
  }

  return (
    <div>
      <h1>Segunda aula</h1>
      <p>Eu posso ter html dentro de uma função</p>
      <h2>O valor da variavel é: {variavel}</h2>
      <button onClick={alterarValor}>Clicar para alterar a  variavel</button>
      <h1>Também é possivel esconder ou mostrar itens na tela com perguntas javascript</h1>
      <button onClick={()=>setBoolean(state=>!state)}> Alterar</button>
      {/* boolean está true? se sim(?) mostre true se não (:) mostre false */}
      { boolean? "true" : "false" }<br/>
      <Botao tarefa={Logar} classe="botao purple">Entrar</Botao>
      <Botao tarefa={Deslogar} classe="botao blue">Sair</Botao>
      {
        logado ? <p> Logado </p> : <p>Deslogado</p>
      }
    </div>
  );
}

export default App;
