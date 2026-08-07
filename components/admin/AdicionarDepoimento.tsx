"use client";

import { useState } from "react";


export default function AdicionarDepoimento({

siteId

}:{
siteId:string
}){


const [nome,setNome] = useState("");

const [texto,setTexto] = useState("");



async function adicionar(){


await fetch("/api/depoimentos/criar",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

siteId,

nome,

texto

})

});


window.location.reload();


}



return (

<div className="mt-10 space-y-4">


<input

placeholder="Nome do cliente"

value={nome}

onChange={
e=>setNome(e.target.value)
}

className="
border
p-4
rounded-xl
w-full
"

/>



<textarea

placeholder="Depoimento"

value={texto}

onChange={
e=>setTexto(e.target.value)
}

className="
border
p-4
rounded-xl
w-full
h-32
"

/>



<button

onClick={adicionar}

className="
bg-yellow-500
px-8
py-3
rounded-xl
font-bold
"

>

Adicionar depoimento

</button>


</div>

)

}