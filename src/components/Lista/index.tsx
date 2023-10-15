import React from "react";
import Item from "./Item";
import { useState } from "react"

export default function Lista() {
  
  const [tarefas , setTarefas] = useState([
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
    <aside className="max-[500px]:mb-[1em]">
      <h2 className="font-bold">Estudos do dia</h2>
      <ul className="scrolUl">
        {tarefas.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </ul>
    </aside>
  );
}
