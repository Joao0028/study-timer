interface Props {
  tempo: number | undefined;
}

export default function Tempo({ tempo = 0 }: Props) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;

  const [ minutoDezena, minutoUnidade ] = String(minutos).padStart(2, "0");
  const [ segundoDezena, segundoUnidade ] = String(segundos).padStart(2, "0");
  return (
    <h2 className="text-[22px] mb-1 font-extrabold max-sm:text-[20px]">
      {minutoDezena}{minutoUnidade}
      <span className="text-cor-azulClaro">:</span>
      {segundoDezena}{segundoUnidade}
      
    </h2>
  );
}
