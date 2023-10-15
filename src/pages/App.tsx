import React from "react";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cronometro from "../components/Cronometro";
import { useState } from "react";

function App() {
  let [tarefas , setTarefas] = useState([
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
    {
      tarefa: "Typescript",
      tempo: "03:00:00",
    },
  ]); 
  
  return (
    <section>
      <Header />
      <div className="App">
        <Formulario setTarefas={setTarefas}/>
        <Lista tarefas={tarefas}/>
      </div>
      <Cronometro />
      <Footer />
    </section>
  );
}

export default App;
