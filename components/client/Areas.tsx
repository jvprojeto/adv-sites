import { themes } from "@/themes";

type Props = {
  data:any;
};


const descriptions:any = {

  "Direito Civil":
  "Soluções jurídicas para contratos, responsabilidades, indenizações e relações civis.",

  "Direito Empresarial":
  "Estratégias jurídicas para empresas, negócios, contratos e proteção patrimonial.",

  "Direito de Família":
  "Atuação humanizada em divórcios, guarda, pensão e questões familiares.",

  "Direito Tributário":
  "Planejamento e defesa tributária para pessoas físicas e empresas.",

  "Direito Trabalhista":
  "Defesa dos interesses em relações trabalhistas e empresariais.",

  "Direito Imobiliário":
  "Segurança jurídica em imóveis, contratos e negociações."

};



const icons:any = {

"Direito Civil":"⚖️",
"Direito Empresarial":"🏢",
"Direito de Família":"👨‍👩‍👧",
"Direito Tributário":"📊",
"Direito Trabalhista":"💼",
"Direito Imobiliário":"🏠"

};



export default function Areas({data}:Props){


const theme =
themes[
(data?.site?.template as keyof typeof themes)
|| 
"premium"
];



const areas =
data?.site?.areas?.length
?
data.site.areas
:
[
{
id:1,
titulo:"Direito Civil"
},
{
id:2,
titulo:"Direito Empresarial"
},
{
id:3,
titulo:"Direito de Família"
},
{
id:4,
titulo:"Direito Tributário"
}
];




return (


<section

id="areas"

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

Especialidades

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

Áreas de atuação

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

Conheça nossas principais áreas de atuação e descubra como podemos ajudar em cada desafio jurídico.

</p>






<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
mt-16
"

>


{

areas.map((area:any,index:number)=>(



<div

key={area.id}

className={`

${theme.card.className}

p-8

rounded-3xl

relative

overflow-hidden

transition

hover:-translate-y-2

duration-300

`}

>




<div

className="
flex
items-center
justify-between
"

>


<div

className="
text-4xl
"

>

{
icons[area.titulo]
||
"⚖️"
}

</div>



<span

className="
text-yellow-500
font-black
"

>

0{index+1}

</span>



</div>






<h3

className={`
${theme.colors.title}
text-2xl
font-black
mt-8
`}

>

{area.titulo}

</h3>




<p

className={`
${theme.colors.paragraph}
mt-4
leading-7
`}

>

{
descriptions[area.titulo]
||
"Atuação jurídica estratégica com atendimento personalizado para cada cliente."
}

</p>






<div

className="
mt-8
h-1
w-16
bg-yellow-500
rounded-full
"

>



</div>



</div>



))

}



</div>




</div>


</section>


);


}