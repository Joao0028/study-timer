import React from "react";
import "./App.scss";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import Header from "../components/Header";

function App() {
  return (
    <section>
      <Header />
      <div className="App">
        <Formulario />
        <Lista />
      </div>
    </section>
  );
}

export default App;
