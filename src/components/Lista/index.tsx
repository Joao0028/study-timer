import Item from "./Item";

interface TarefasLista {
  tarefas: { tarefa: string; tempo: string }[];
}

export default function Lista({ tarefas }: TarefasLista) {
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
