import React from "react";
import Botao from "../Botao";

export default function Formulario() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <label className="block font-bold" htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          className="input"
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar?"
          required
        />
        <Botao />
      </div>
      <div>
        <label className="block font-bold" htmlFor="tempo">Tempo</label>
        <input
          className="input"
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
