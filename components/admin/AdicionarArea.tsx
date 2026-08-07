"use client";

import { useState } from "react";


export default function AdicionarArea({

siteId

}:{

siteId:string

}){


const [titulo,setTitulo] = useState("");



async function adicionar(){


await fetch("/api/areas/criar",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

siteId,

titulo

})

});


window.location.reload();


}



return (

<div className="mt-10">


<input

value={titulo}

onChange={
e=>setTitulo(e.target.value)
}

placeholder="Nome da área"

className="
border
p-4
rounded-xl
w-full
"

/>


<button

onClick={adicionar}

className="
mt-4
bg-yellow-500
text-black
px-8
py-3
rounded-xl
font-bold
"

>

Adicionar área

</button>


</div>

)

}