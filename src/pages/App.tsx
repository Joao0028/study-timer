import React from "react";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cronometro from "../components/Cronometro";
import { useState } from "react";
import TarefasLista from "../types/tarefa";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  let [tarefas, setTarefas] = useState<TarefasLista[]>([]);
  const [selecionado, setSelecionado] = useState<TarefasLista>();

  function selecionaTarefa(tarefaSelecionada: TarefasLista) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  }
  return (
    <section>
      <ToastContainer />
      <Header />
      <div className="App">
        <Formulario setTarefas={setTarefas} />
        <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      </div>
      <Cronometro 
      finalizarTarefa={finalizarTarefa}
      selecionado={selecionado} />
      <Footer />
    </section>
  );
}

export default App;
