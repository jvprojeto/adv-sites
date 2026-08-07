"use client";

type Props = {
  data:any;
};

export default function WhatsAppFloat({data}:Props){

  const numero =
    data?.whatsapp?.replace(/\D/g,"") || "";


  if(!numero) return null;


  return (

    <a
      href={`https://wa.me/${numero}`}
      target="_blank"

      className="
      fixed
      bottom-6
      right-6
      z-50

      bg-green-500
      hover:bg-green-600

      text-white

      w-16
      h-16

      rounded-full

      flex
      items-center
      justify-center

      text-3xl

      shadow-2xl

      transition
      hover:scale-110
      "

    >

      💬

    </a>

  );

}