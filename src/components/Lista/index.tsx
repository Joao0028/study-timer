import TarefasLista from "../../types/tarefa";
import Item from "./Item";

export default function Lista({tarefas}:{ tarefas: TarefasLista[]}) {
  const palavra = tarefas.length > 0? "Estudos do dia" : "*Adicione algum estudo*"
  return (
    <aside className="max-[500px]:mb-[1em] max-md:w-[430px] w-[335px] max-[500px]:w-[330px]">
      <h2 className="font-bold">{palavra}</h2>
      <ul className="scrolUl">
        {tarefas.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </ul>
    </aside>
  );
}
