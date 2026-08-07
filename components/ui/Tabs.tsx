"use client";

type Props = {
  abas: string[];
  ativa: string;
  mudar: (aba:string)=>void;
};


export default function Tabs({
  abas,
  ativa,
  mudar
}:Props){

return (

<div className="
flex
gap-3
border-b
pb-4
mb-8
">

{
abas.map((aba:any)=>(

<button

key={aba}

onClick={()=>mudar(aba)}

className={`
px-5
py-3
rounded-xl
font-bold
transition

${
ativa === aba
?
"bg-black text-white"
:
"bg-gray-100"
}

`}

>

{aba}

</button>

))

}

</div>

);

}