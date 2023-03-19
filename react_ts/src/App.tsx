import "./App.css";
import { createContext } from "react";
import FirstComponent from "./components/FirstComponent";

//4 - Desestruturacao de props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 5 - Hooks
import State from "./components/State";

// 8 - Context
import Context from "./components/Context";

// 7 - Type
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";

// 8 - Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - Variaveis
  const name: string = "Fabio";
  const age: number = 20;
  const isWorking: boolean = true;

  // 2 - Funcoes
  const showName = (name: string): string => {
    return `Ola ${name}`;
  };

  // 7 - Type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  // mySecondText = "Opa";

  const testandoFixed: fixed = "Isso";

  // 8 - Context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "React",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
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
        <SecondComponent name="Segundo" />
        <Destructuring
          title="Primeiro Post"
          content="Algum conteudo"
          commentQty={10}
          tags={["ts", "react"]}
          category={Category.TS}
        />
        <State />
        {myText && <p>Tem texto na variavel</p>}
        {mySecondText && <p>Tem texto na variavel</p>}
        {testandoFixed && <p>Tem texto na variavel</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
