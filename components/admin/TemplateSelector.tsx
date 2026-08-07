"use client";

import { useState } from "react";



type Props = {
  clienteId:string;
  templateAtual:string;
};



const templates = [

{
nome:"Premium",
valor:"premium"
},

{
nome:"Executivo",
valor:"executivo"
},

{
nome:"Empresarial",
valor:"empresarial"
},

{
nome:"Minimalista",
valor:"minimalista"
},

{
nome:"Tribunal",
valor:"tribunal"
}

];



export default function TemplateSelector({
clienteId,
templateAtual
}:Props){


const [template,setTemplate]=useState(templateAtual);



async function salvar(valor:string){

setTemplate(valor);


await fetch("/api/sites/editar",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

clienteId,

template:valor

})

});


}



return(

<div className="mt-10">


<h2 className="text-2xl font-bold mb-5">

Modelo do site

</h2>



<div className="grid md:grid-cols-5 gap-4">


{
templates.map((item:any)=>(


<button

key={item.valor}

onClick={()=>salvar(item.valor)}

className={`
p-5
rounded-2xl
border
font-bold
${
template===item.valor
?
"bg-black text-white"
:
"bg-white"
}
`}

>

{item.nome}

</button>


))
}


</div>


</div>

)


}