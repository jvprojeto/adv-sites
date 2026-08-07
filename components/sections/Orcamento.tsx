"use client";

import { useState, useEffect } from "react";


export default function Orcamento(){

const [enviando,setEnviando] = useState(false);


const [form,setForm] = useState({

nome:"",
whatsapp:"",
email:"",
escritorio:"",
tipoSite:"Site jurídico",
mensagem:""

});



useEffect(()=>{

const params = new URLSearchParams(window.location.search);

const modelo = params.get("modelo");


if(modelo){

setForm(prev=>({

...prev,

tipoSite:
"Modelo " +
modelo.charAt(0).toUpperCase() +
modelo.slice(1)

}));

}


},[]);



function alterar(
campo:string,
valor:string
){

setForm(prev=>({

...prev,

[campo]:valor

}));

}



async function enviar(){

setEnviando(true);


try{


const resposta = await fetch(
"/api/leads",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(form)

}

);



if(!resposta.ok){

throw new Error();

}



alert(
"Recebemos seu pedido! Nossa equipe entrará em contato."
);


window.location.href="/obrigado";



}catch{


alert(
"Erro ao enviar. Tente novamente."
);


}finally{


setEnviando(false);


}


}



return (

<section
id="orcamento"
className="
py-24
bg-black
text-white
"
>


<div
className="
max-w-4xl
mx-auto
px-6
"
>


<h2
className="
text-5xl
font-bold
text-center
"
>

Solicite seu site jurídico

</h2>



<p
className="
text-center
mt-6
text-gray-400
text-lg
"
>

Receba uma proposta personalizada para transformar
a presença digital do seu escritório.

</p>



<div
className="
grid
gap-4
mt-12
"
>



<input
placeholder="Seu nome"
value={form.nome}
onChange={
e=>alterar("nome",e.target.value)
}
className="
p-4
rounded-xl
bg-white
text-black
"
/>



<input
placeholder="WhatsApp"
value={form.whatsapp}
onChange={
e=>alterar("whatsapp",e.target.value)
}
className="
p-4
rounded-xl
bg-white
text-black
"
/>



<input
placeholder="Email"
value={form.email}
onChange={
e=>alterar("email",e.target.value)
}
className="
p-4
rounded-xl
bg-white
text-black
"
/>



<input
placeholder="Nome do escritório"
value={form.escritorio}
onChange={
e=>alterar("escritorio",e.target.value)
}
className="
p-4
rounded-xl
bg-white
text-black
"
/>



<select

value={form.tipoSite}

onChange={
e=>alterar("tipoSite",e.target.value)
}

className="
p-4
rounded-xl
bg-white
text-black
"

>


<option>
Site jurídico
</option>


<option>
Landing Page
</option>


<option>
Site Premium
</option>


</select>



<textarea

placeholder="Conte um pouco sobre seu projeto"

value={form.mensagem}

onChange={
e=>alterar("mensagem",e.target.value)
}

className="
p-4
rounded-xl
bg-white
text-black
h-32
"

/>



<button

onClick={enviar}

disabled={enviando}

className="
bg-yellow-500
text-black
font-bold
py-4
rounded-xl
hover:opacity-90
"

>

{
enviando
?
"Enviando..."
:
"Solicitar proposta"
}


</button>



</div>


</div>


</section>


);


}