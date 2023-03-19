import "./App.css";
import FirstComponent from "./components/FirstComponent";

function App() {
  // 1 - Variaveis
  const name: string = "Fabio";
  const age: number = 20;
  const isWorking: boolean = true;

  // 2 - Funcoes
  const showName = (name: string): string => {
    return `Ola ${name}`;
  };

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <div>
          <p>Trabalha</p>
        </div>
      )}
      {showName(name)}
      <FirstComponent />
    </div>
  );
}

export default App;
