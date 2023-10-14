import React from "react";

interface BotaoProps {
    texto?: string
}

export default function Botao({texto = "Enviar"}:BotaoProps){
    return (
        <button className="bg-cor-azulClaro text-cor-branco font-bold h-[40px] w-[140px] rounded-sm hover:opacity-95 ml-2">{texto}</button>
    )
}