"use client";

import { useState } from "react";

export default function GerarIA({
cliente
}:any){

const [gerando,setGerando] = useState(false);

const [status,setStatus] = useState("");



async function gerar(){

const confirmar = confirm(
"Gerar site com IA vai substituir o conteúdo atual. Deseja continuar?"
);


if(!confirmar){
return;
}


setGerando(true);


try{


setStatus("✨ Analisando escritório...");


const resposta = await fetch(
"/api/ia/gerar",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

nome:cliente.nome,

cidade:cliente.cidade,

whatsapp:cliente.whatsapp

})

}

);



const resultado = await resposta.json();



await fetch("/api/sites/editar",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

clienteId: cliente.id,

template: resultado.template,

slogan: resultado.slogan,

descricao: resultado.descricao,

sobre: resultado.sobre

})

});



setStatus("✍ Criando conteúdo jurídico...");



// cria áreas

if(resultado.areas){

for(const area of resultado.areas){

await fetch(
"/api/areas/criar",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

siteId:cliente.site.id,

titulo:area.titulo

})

}

);

}

}



setStatus("❓ Criando perguntas frequentes...");


// cria FAQs

if(resultado.faqs){

for(const faq of resultado.faqs){

await fetch(
"/api/faqs/criar",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

siteId:cliente.site.id,

pergunta:faq.pergunta,

resposta:faq.resposta

})

}

);

}

}



setStatus("⭐ Finalizando depoimentos...");


// cria depoimentos

if(resultado.depoimentos){

for(const depoimento of resultado.depoimentos){

await fetch(
"/api/depoimentos/criar",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

siteId:cliente.site.id,

nome:depoimento.nome,

texto:depoimento.texto

})

}

);

}

}



alert("Site gerado com IA com sucesso!");

window.location.reload();



}catch(error){

console.log(error);

alert(
"Erro ao gerar site com IA."
);


}finally{

setGerando(false);

setStatus("");

}

}



return (

<div>

<button

onClick={gerar}

disabled={gerando}

className={`
px-8
py-4
rounded-xl
font-bold
transition
${
gerando
?
"bg-gray-400 cursor-not-allowed"
:
"bg-black text-white hover:scale-105"
}
`}

>

{

gerando

?

"Gerando..."

:

"✨ Gerar site com IA"

}

</button>


{

status && (

<p className="
mt-4
text-sm
font-semibold
text-gray-600
">

{status}

</p>

)

}


</div>

);

}