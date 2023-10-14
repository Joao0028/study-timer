import React from "react";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <section>
      <Header />
      <div className="App">
        <Formulario />
        <Lista />
      </div>
      <Footer/>
    </section>
  );
}

export default App;
