import TarefasLista from "../../types/tarefa";
import Item from "./Item";

interface Props{
  tarefas: TarefasLista[],
  selecionaTarefa: (tarefaSelecionada: TarefasLista)=>void
}

export default function Lista({tarefas, selecionaTarefa}:Props) {
  const palavra = tarefas.length > 0? "Estudos do dia" : "*Adicione algum estudo*"
  return (
    <aside className="max-[500px]:mb-[1em] max-md:w-[430px] w-[335px] max-[500px]:w-[330px]">
      <h2 className="font-bold">{palavra}</h2>
      <ul className="scrolUl">
        {tarefas.map((item, index) => (
          <Item 
          selecionaTarefa={selecionaTarefa}
          {...item} 
          key={item.id} />
        ))}
      </ul>
    </aside>
  );
}
