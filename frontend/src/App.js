import { useState } from "react";
function App() {
  // useState explicado
  const [variavel,FunctionParaMudarAVariavel] = useState("Valor inicial")
  const [boolean,setBoolean] = useState(false)
  const [numero,setNumero] = useState(0)
  const [lista,setLista] = useState([])
  const [objeto, setObj] = useState({nome: "obj",quantidade: 14,entendeu: false})

  function alterarValor (){
    FunctionParaMudarAVariavel("Alterei")
  }


  return (
    <div>
      <h1>Olá tudo bem com voce?</h1>
      <p>Eu posso ter html dentro de uma função</p>
      <h2>O valor da variavel é: {variavel}</h2>
      <button onClick={alterarValor}>Clicar para alterar a  variavel</button>
    </div>
  );
}

export default App;
