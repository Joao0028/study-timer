import React, { useState } from "react";
import Botao from "../Botao";
import { v4 as uuidv4 } from "uuid";

interface PropsState {
  tarefa: string;
  tempo: string;
}

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<PropsState[]>>;
}

export default function Formulario(props: Props) {
  let [state, setState] = useState<PropsState>({
    tarefa: "",
    tempo: "00:00:00",
  });

  function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.setTarefas((tarefas) => [
      ...tarefas,
      {
        ...state,
        selecionado:false,
        completado:false,
        id: uuidv4()
      },
    ]);
    setState({
      tarefa: "",
      tempo: "00:00:00",
    });
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={adicionarTarefa}>
      <div className="max-[500px]:flex max-[500px]:flex-col">
        <label className="block font-bold" htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input
          onChange={(evento) =>
            setState({ ...state, tarefa: evento.target.value })
          }
          value={state.tarefa}
          className="input"
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className="max-[500px]:flex max-[500px]:flex-col">
        <label className="block font-bold" htmlFor="tempo">
          Tempo
        </label>
        <input
          className="input"
          onChange={(evento) =>
            setState({ ...state, tempo: evento.target.value })
          }
          value={state.tempo}
          type="time"
          step="1"
          min="00:00:00"
          max="12:00:00"
          name="tempo"
          id="tempo"
          required
        />
      </div>
      <Botao type="submit" />
    </form>
  );
}
