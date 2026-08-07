"use client";

export default function ConverterLeadButton({
  leadId
}:{
  leadId:string
}){


async function converter(){


const resposta = await fetch(
`/api/leads/converter/${leadId}`,
{
method:"POST"
}
);



if(resposta.ok){

alert("Lead convertido em cliente!");

window.location.reload();

}else{

alert("Erro ao converter lead");

}


}



return (

<button

onClick={converter}

className="
bg-black
text-white
px-6
py-3
rounded-xl
font-bold
hover:scale-105
transition
"

>

🟢 Converter cliente

</button>

);


}