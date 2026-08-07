"use client";

import { useState } from "react";

export default function CriarSiteButton({
clienteId
}:{
clienteId:string
}){

const [loading,setLoading]=useState(false);


async function criar(){

setLoading(true);


try{


const resposta = await fetch(
"/api/sites/criar",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
clienteId
})

}

);



const resultado = await resposta.json();



if(!resultado.sucesso){

throw new Error();

}



window.location.href =
`/admin/sites/${resultado.siteId}`;



}catch{

alert("Erro ao criar site");


setLoading(false);

}


}



return(

<button

onClick={criar}

disabled={loading}

className="
bg-black
text-white
px-5
py-2
rounded-xl
font-bold
"

>

{

loading

?

"Criando..."

:

"Criar site"

}

</button>

)

}