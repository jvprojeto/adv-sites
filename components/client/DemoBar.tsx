type Props = {
  data:any;
};


export default function DemoBar({data}:Props){

return (

<div
className="
bg-yellow-500
text-black
py-3
text-center
font-bold
relative
z-50
"
>

🚀 Demonstração de site para {data.nome}


<a

href={`https://wa.me/${data.whatsapp}`}

className="
ml-4
bg-black
text-white
px-5
py-2
rounded-xl
"

>

Quero meu site

</a>


</div>

)

}