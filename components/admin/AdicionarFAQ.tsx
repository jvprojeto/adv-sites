"use client";

import { useState } from "react";


export default function AdicionarFAQ({siteId}: {siteId?: string}) {

  const [pergunta,setPergunta] = useState("");
  const [resposta,setResposta] = useState("");
  const [salvando,setSalvando] = useState(false);



 async function adicionar(){

console.log("ADICIONANDO FAQ", {
  siteId,
  pergunta,
  resposta
});


await fetch("/api/faqs/criar",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({

        siteId,
        pergunta,
        resposta

      })

    });


    setPergunta("");
    setResposta("");

    setSalvando(false);

    window.location.reload();

  }



  return (

    <div className="mt-10">

      <h2 className="text-xl font-bold">
        Adicionar FAQ
      </h2>


      <input

        value={pergunta}

        onChange={(e)=>setPergunta(e.target.value)}

        placeholder="Pergunta"

        className="border p-3 rounded-xl w-full mt-3"

      />


      <textarea

        value={resposta}

        onChange={(e)=>setResposta(e.target.value)}

        placeholder="Resposta"

        className="
        border
        p-3
        rounded-xl
        w-full
        mt-3
        h-32
        "

      />


      <button

        onClick={adicionar}

        className="
        bg-black
        text-white
        px-6
        py-3
        rounded-xl
        mt-3
        "

      >

      {
        salvando
        ? "Salvando..."
        : "Adicionar FAQ"
      }

      </button>


    </div>

  );

}