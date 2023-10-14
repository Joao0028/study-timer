import React from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import StudyImage from "./assets/StudyImage.svg";

function App() {
  return (
    <section className="appTsx">
      <main className="containerPrincipal">
        <div className="containerImagem">
          <img
            className="max-w-[250px]"
            src={StudyImage}
            alt="Svg de uma pessoa estudando"
          />
        </div>
        <div className="container">
          <Formulario />
          <Lista />
        </div>
      </main>
    </section>
  );
}

export default App;
