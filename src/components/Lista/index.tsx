import React from "react";

export default function Lista() {
  const tarefas = [
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
  ];
  return (
    <aside className="lista">
      <h2 className="font-bold">Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index} className="mb-4 bg-[#141414] pl-3 w-[250px] py-[6px] border-solid border-l-2 border-cor-azulClaro">
            <h3 className="font-medium">{item.tarefa}</h3>
            <span className="text-cor-cinza">{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
