export default function Plans(){


const plans = [

{
name:"Essencial",
price:"A partir de R$ 1.500",
description:
"Para escritórios que precisam começar sua presença digital.",
features:[
"Site profissional",
"Página institucional",
"Botão WhatsApp",
"Design responsivo"
]
},


{
name:"Premium",
price:"A partir de R$ 3.000",
description:
"Para escritórios que querem uma presença mais forte.",
features:[
"Site completo",
"Design exclusivo",
"Seções estratégicas",
"Otimização para conversão"
],
highlight:true
},


{
name:"Manutenção",
price:"A partir de R$ 199/mês",
description:
"Para manter o site sempre atualizado.",
features:[
"Alterações de conteúdo",
"Suporte contínuo",
"Melhorias constantes",
"Acompanhamento"
]

}


];



return(


<section

id="planos"

className="
py-28
bg-gray-50
"

>


<div className="
max-w-7xl
mx-auto
px-6
">


<div className="
text-center
">


<p className="
uppercase
tracking-[5px]
text-yellow-600
font-bold
">

Planos

</p>


<h2 className="
text-5xl
font-bold
mt-4
">

Escolha a melhor solução para seu escritório

</h2>


</div>




<div className="
grid
md:grid-cols-3
gap-8
mt-16
">


{

plans.map((plan:any)=>(


<div

key={plan.name}

className={`
rounded-3xl
p-8
bg-white
border
shadow-lg

${plan.highlight
?
"border-yellow-500 scale-105"
:
""
}

`}

>


<h3 className="
text-3xl
font-black
">

{plan.name}

</h3>


<p className="
text-yellow-600
text-xl
font-bold
mt-4
">

{plan.price}

</p>


<p className="
text-gray-600
mt-5
">

{plan.description}

</p>



<ul className="
mt-8
space-y-3
">


{

plan.features.map((feature:any)=>(


<li

key={feature}

className="
text-gray-700
"

>

✓ {feature}

</li>


))


}


</ul>



<a

href="#orcamento"

className="
block
text-center
mt-8
bg-black
text-white
py-4
rounded-xl
font-bold
"

>

Solicitar proposta

</a>



</div>


))


}



</div>


</div>


</section>


)


}