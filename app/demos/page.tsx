import Link from "next/link";


const demos = [

{
nome:"Premium",
descricao:"Design sofisticado para escritórios que querem transmitir autoridade.",
slug:"premium",
cor:"bg-black text-white"
},


{
nome:"Executivo",
descricao:"Uma identidade forte para escritórios de alto padrão.",
slug:"executivo",
cor:"bg-slate-950 text-white"
},


{
nome:"Empresarial",
descricao:"Focado em advocacia corporativa e negócios.",
slug:"empresarial",
cor:"bg-blue-950 text-white"
},


{
nome:"Tribunal",
descricao:"Visual clássico, institucional e tradicional.",
slug:"tribunal",
cor:"bg-neutral-950 text-white"
},


{
nome:"Minimalista",
descricao:"Design limpo, moderno e objetivo.",
slug:"minimalista",
cor:"bg-white text-black"
}

];



export default function Demos(){


return(

<main className="
min-h-screen
bg-gray-100
py-24
">


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

Modelos

</p>



<h1 className="
text-6xl
font-black
mt-5
">

Demonstrações ADV Sites

</h1>



<p className="
text-gray-600
text-xl
mt-6
">

Escolha o estilo ideal para o seu escritório.

</p>


</div>




<div className="
grid
md:grid-cols-3
gap-8
mt-16
">


{

demos.map((demo)=>(


<div

key={demo.slug}

className="
rounded-3xl
overflow-hidden
shadow-xl
bg-white
border
"

>


<div

className={`
h-56
flex
items-center
justify-center
${demo.cor}
`}

>


<h2 className="
text-4xl
font-black
">

ADV
<br/>
{demo.nome}

</h2>


</div>




<div className="
p-8
">


<h3 className="
text-3xl
font-bold
">

{demo.nome}

</h3>



<p className="
text-gray-600
mt-4
">

{demo.descricao}

</p>




<Link

href={`/templates/${demo.slug}`}

className="
inline-block
mt-8
bg-black
text-white
px-8
py-4
rounded-xl
font-bold
"

>

Ver modelo

</Link>


</div>


</div>


))


}


</div>


</div>


</main>


)


}