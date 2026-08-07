import { prisma } from "@/lib/prisma";
import Link from "next/link";


export default async function PropostaPage({

params

}:{

params: Promise<{slug:string}>

}){


const {slug} = await params;



const cliente = await prisma.cliente.findUnique({

where:{
slug
},

include:{

site:{

include:{

areas:true,
faqs:true,
depoimentos:true

}

}

}

});



if(!cliente || !cliente.site){

return (

<main className="p-10">

<h1 className="text-3xl font-bold">
Cliente não encontrado.
</h1>

</main>

);

}



const site = cliente.site;



return (

<main className="
min-h-screen
bg-gray-100
py-20
">


<div className="
max-w-5xl
mx-auto
px-6
">


<section className="
bg-black
text-white
rounded-3xl
p-12
">


<img

src="/logo.jpg"

alt="ADV Sites"

className="
w-32
mb-6
rounded-xl
"

/>


<p className="
text-yellow-400
uppercase
tracking-widest
font-bold
">

ADV Sites

</p>



<h1 className="
text-5xl
font-black
mt-6
">

Proposta personalizada de presença digital

</h1>



<p className="
text-xl
text-gray-300
mt-6
">

Um projeto desenvolvido exclusivamente para fortalecer a autoridade digital do escritório:

</p>



<h2 className="
text-4xl
font-bold
mt-4
">

{cliente.nome}

</h2>



</section>





<section className="
grid
md:grid-cols-3
gap-6
mt-10
">


<div className="
bg-white
p-8
rounded-3xl
shadow
">

<h3 className="
text-4xl
font-black
">

{site.areas.length}

</h3>


<p className="text-gray-600">

Áreas jurídicas configuradas

</p>


</div>



<div className="
bg-white
p-8
rounded-3xl
shadow
">

<h3 className="
text-4xl
font-black
">

{site.faqs.length}

</h3>


<p className="text-gray-600">

Perguntas frequentes

</p>


</div>




<div className="
bg-white
p-8
rounded-3xl
shadow
">

<h3 className="
text-4xl
font-black
">

{site.depoimentos.length}

</h3>


<p className="text-gray-600">

Depoimentos

</p>


</div>



</section>





<section className="
bg-white
rounded-3xl
shadow
p-10
mt-10
">


<h2 className="
text-3xl
font-black
">

O projeto inclui

</h2>



<div className="
mt-6
space-y-3
text-lg
">


<p>✓ Site profissional para escritório</p>

<p>✓ Design exclusivo jurídico</p>

<p>✓ Página otimizada para celular</p>

<p>✓ Botão direto para WhatsApp</p>

<p>✓ Estrutura preparada para captar clientes</p>


</div>


</section>






<section className="
bg-white
rounded-3xl
shadow
p-10
mt-10
">


<h2 className="
text-3xl
font-black
">

Investimento

</h2>



<div className="
bg-gray-100
rounded-2xl
p-6
mt-6
">

<p className="font-bold">
Modelo escolhido
</p>

<p className="text-2xl font-black">
{site.template}
</p>


<p className="
font-bold
mt-4
">

Prazo de entrega

</p>

<p className="text-xl">

{site.prazo || "7 dias úteis"}

</p>


</div>


<p className="
text-5xl
font-black
mt-6
">

R$ {(site.valor ?? 0).toLocaleString("pt-BR")}

</p>



<p className="
mt-4
text-gray-600
">

Manutenção opcional:

<strong>
{" "}
R$ {site.manutencao ?? 0}/mês
</strong>

</p>



<p className="
mt-4
text-gray-600
">

Entrega estimada:

<strong>
{" "}
{site.prazo ?? "7 dias"}
</strong>

</p>


</section>



<section className="
bg-white
rounded-3xl
shadow
p-10
mt-10
">


<h2 className="
text-3xl
font-black
">

Próximos passos

</h2>



<div className="
mt-6
space-y-3
text-lg
">


<p>✓ Aprovação da proposta</p>

<p>✓ Desenvolvimento do site</p>

<p>✓ Ajustes personalizados</p>

<p>✓ Publicação online</p>

<p>✓ Suporte e manutenção contínua</p>


</div>


</section>







<section className="
bg-black
text-white
rounded-3xl
p-10
mt-10
text-center
">


<h2 className="
text-3xl
font-bold
">

Gostou da proposta?

</h2>



<p className="
mt-4
text-gray-300
">

Vamos colocar seu escritório no digital.

</p>




<a

href={`https://wa.me/${cliente.whatsapp}?text=${encodeURIComponent(
`Olá, tenho interesse em iniciar o projeto do site jurídico para o escritório ${cliente.nome}.`
)}`}

target="_blank"

className="
inline-block
mt-8
bg-green-500
px-8
py-4
rounded-xl
font-bold
text-white
hover:scale-105
transition
"

>

🚀 Aceitar proposta pelo WhatsApp

</a>



</section>



</div>


</main>

);

}