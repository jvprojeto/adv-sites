"use client";


export default function WhatsAppProposta({

cliente

}:{

cliente:any

}){


function abrirWhatsApp(){


const mensagem = `Olá, tudo bem?

Preparei uma demonstração de um site jurídico profissional para o ${cliente.nome}.

Você pode visualizar aqui:

http://localhost:3000/proposta/${cliente.slug}

Fico à disposição para apresentar o projeto.`;


window.open(

`https://wa.me/${cliente.whatsapp}?text=${encodeURIComponent(mensagem)}`,

"_blank"

);


}



return (

<button

onClick={abrirWhatsApp}

className="
bg-green-600
text-white
px-4
py-2
rounded-xl
font-bold
"

>

Enviar WhatsApp

</button>

)

}