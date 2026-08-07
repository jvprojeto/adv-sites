import { themes } from "@/themes";

type Props = {
  data:any;
};



const fallback = [

{
id:1,
nome:"Cliente satisfeito",
texto:
"Excelente atendimento, transparência e acompanhamento durante todo o processo jurídico."
},


{
id:2,
nome:"Empresa atendida",
texto:
"Profissionais preparados e comprometidos em encontrar a melhor solução jurídica."
},


{
id:3,
nome:"Cliente",
texto:
"Um escritório que transmite confiança e segurança desde o primeiro contato."
}

];





export default function Testimonials({data}:Props){



const theme =
themes[
(data?.site?.template as keyof typeof themes)
||
"premium"
];





const depoimentos =
data?.site?.depoimentos?.length
?
data.site.depoimentos
:
fallback;






return (



<section

className={`
${theme.colors.secondary}
py-28
`}

>



<div className="
max-w-7xl
mx-auto
px-6
">





<p

className={`
${theme.colors.accent}
uppercase
tracking-[5px]
font-bold
text-center
`}

>

Confiança

</p>






<h2

className={`
${theme.colors.title}
text-5xl
font-black
text-center
mt-5
`}

>

O que nossos clientes dizem

</h2>





<p

className={`
${theme.colors.paragraph}
text-center
max-w-3xl
mx-auto
mt-6
text-lg
`}

>

A experiência de quem já confiou em nosso trabalho.

</p>







<div

className="
grid
md:grid-cols-3
gap-8
mt-16
"

>





{

depoimentos.map((item:any)=>(



<div

key={item.id}

className={`

${theme.card.className}

rounded-3xl

p-8

relative

transition

hover:-translate-y-2

duration-300

`}

>




<div className="
flex
justify-between
items-center
">


<div className="
text-yellow-500
text-xl
">

★★★★★

</div>


<span className="
text-4xl
opacity-40
">

"

</span>


</div>







<p

className={`
${theme.colors.paragraph}
mt-8
leading-8
text-lg
`}

>

{item.texto}

</p>







<div className="
mt-8
flex
items-center
gap-4
">


<div className="
w-12
h-12
rounded-full
bg-yellow-500
flex
items-center
justify-center
font-black
text-black
">

✓

</div>



<div>


<h3

className={`
${theme.colors.title}
font-black
`}

>

{item.nome}

</h3>


<p className="
text-sm
opacity-60
">

Cliente verificado

</p>


</div>


</div>





</div>



))

}





</div>





</div>


</section>



);


}