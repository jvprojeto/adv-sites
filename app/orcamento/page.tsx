"use client";

import { useState } from "react";


export default function Orcamento() {

  const [enviado, setEnviado] = useState(false);


  async function enviar(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();


    const form = new FormData(e.currentTarget);


    const dados = {

      nome: form.get("nome"),

      whatsapp: form.get("whatsapp"),

      email: form.get("email"),

      cidade: form.get("cidade"),

    };


    await fetch("/api/orcamento", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(dados),

    });



    const mensagem = encodeURIComponent(
      `Olá, sou ${dados.nome} e quero criar um site jurídico para meu escritório.`
    );


    window.open(
      `https://wa.me/5511948156665?text=${mensagem}`,
      "_blank"
    );


    setEnviado(true);

  }



  return (

    <main className="
    min-h-screen
    flex
    items-center
    justify-center
    bg-gray-50
    px-6
    ">


      <form
      onSubmit={enviar}
      className="
      bg-white
      p-10
      rounded-3xl
      shadow-xl
      max-w-xl
      w-full
      "
      >


        <h1 className="
        text-4xl
        font-bold
        ">
          Solicite seu site jurídico
        </h1>


        <p className="
        text-gray-600
        mt-4
        ">
          Conte sobre seu escritório e vamos criar sua presença digital.
        </p>



        <input
        name="nome"
        required
        placeholder="Nome do escritório"
        className="
        border
        p-4
        w-full
        mt-6
        rounded-xl
        "
        />



        <input
        name="whatsapp"
        required
        placeholder="WhatsApp"
        className="
        border
        p-4
        w-full
        mt-4
        rounded-xl
        "
        />



        <input
        name="email"
        placeholder="Email"
        className="
        border
        p-4
        w-full
        mt-4
        rounded-xl
        "
        />



        <input
        name="cidade"
        placeholder="Cidade"
        className="
        border
        p-4
        w-full
        mt-4
        rounded-xl
        "
        />



        <button
        type="submit"
        className="
        mt-8
        bg-black
        text-white
        px-10
        py-4
        rounded-xl
        font-bold
        hover:opacity-80
        "
        >
          Criar meu site jurídico
        </button>



        {enviado && (

          <p className="
          mt-5
          text-green-600
          font-semibold
          ">
            Recebemos seu contato! Vamos falar pelo WhatsApp.
          </p>

        )}


      </form>


    </main>

  );

}