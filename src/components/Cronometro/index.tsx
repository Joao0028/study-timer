import TempoParaSegundos from "../../common/utils/Time";
import TarefasLista from "../../types/tarefa";
import Botao from "../Botao";
import Tempo from "./Tempo";
import { useState, useEffect } from "react";

interface Props {
  selecionado: TarefasLista | undefined;
  finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(TempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa()
    }, 1000);
  }

  return (
    <div className="text-cor-branco border-solid border-b-2 border-cor-azulClaro bg-[#141414] px-8 py-6 rounded-sm  m-auto flex justify-center flex-col items-center mb-[10em] w-[400px] max-sm:w-[325px]">
      <p className="font-bold max-sm:text-[12px]">
        Escolha um card e inicie o cronômetro
      </p>
      <Tempo tempo={tempo} />
      <Botao onClick={() => regressiva(tempo)} texto="Começar" />
    </div>
  );
}
