"use client";

import { useState } from "react";


export default function PublicarSite({

siteId,

publicado

}:{

siteId:string;

publicado:boolean;

}){


const [carregando,setCarregando] = useState(false);



async function publicar(){


setCarregando(true);



try{


const resposta = await fetch(
"/api/sites/publicar",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

siteId

})

}

);



if(!resposta.ok){

throw new Error();

}



alert("Site publicado com sucesso!");



window.location.reload();



}catch(error){


console.log(error);

alert("Erro ao publicar");



}finally{


setCarregando(false);


}


}




return (


<button

onClick={publicar}

disabled={carregando || publicado}

className={`
px-8
py-4
rounded-xl
font-bold
${publicado
?
"bg-green-600 text-white"
:
"bg-black text-white"
}
`}

>


{

publicado

?

"🟢 Site publicado"

:

carregando

?

"Publicando..."

:

"🚀 Publicar site"


}



</button>


);


}