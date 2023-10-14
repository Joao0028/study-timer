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
    <aside className="max-[500px]:mb-[6em]">
      <h2 className="font-bold">Estudos do dia</h2>
      <ul className="scrolUl">
        {tarefas.map((item, index) => (
          <li key={index} className="mb-3 bg-[#141414] pl-3 w-[325px] cursor-pointer py-[6px] border-solid border-b-2 border-cor-azulClaro max-md:w-[430px] max-[500px]:w-[325px] mr-1 ">
            <h3 className="font-medium">{item.tarefa}</h3>
            <span className="text-cor-cinza">{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
