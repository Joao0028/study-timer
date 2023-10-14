import React from "react";
import Botao from "../Botao";

export default function Formulario() {
  return (
    <form>
      <div>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar?"
          required
        />
        <Botao />
      </div>
      <div>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          min="00:00:00"
          max="12:00:00"
          name="tempo"
          id="tempo"
          required
        />
        <Botao />
      </div>
    </form>
  );
}
