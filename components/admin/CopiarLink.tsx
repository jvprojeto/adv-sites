"use client";

export default function CopiarLink({
  link
}: {
  link:string
}) {

  function copiar(){

    navigator.clipboard.writeText(link);

    alert("Link copiado!");

  }


  return (

    <button

    onClick={copiar}

    className="
    bg-gray-200
    text-gray-900
    px-4
    py-2
    rounded-xl
    font-bold
    "

    >

      📋 Copiar link

    </button>

  );

}