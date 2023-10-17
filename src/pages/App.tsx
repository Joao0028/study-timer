import React from "react";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cronometro from "../components/Cronometro";
import { useState } from "react";
import TarefasLista from "../types/tarefa";

function App() {
  let [tarefas, setTarefas] = useState<TarefasLista[]>([]);
  const [selecionado, setSelecionado] = useState<TarefasLista>();

  function selecionaTarefa(tarefaSelecionada: TarefasLista){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true: false
    })));
  }

  return (
    <section>
      <Header />
      <div className="App">
        <Formulario setTarefas={setTarefas} />
        <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
        />
      </div>
      <Cronometro />
      <Footer />
    </section>
  );
}

export default App;
