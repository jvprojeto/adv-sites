import { themes } from "@/themes";

type Props = {
  data:any;
};

export default function About({data}:Props){

  const template =
    data?.site?.template || "premium";


  const theme =
  themes[template as keyof typeof themes] || themes.premium;


  const premium = template === "premium";


  const anos =
    data?.site?.anosExperiencia || "15";


  const oab =
    data?.site?.oab || "OAB/SP 123456";


  const especialidade =
    data?.site?.especialidade || "Advocacia Empresarial";



  if(premium){

    return (

<section
id="sobre"
className="
bg-white
text-gray-900
py-32
"
>


<div className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-20
items-center
">



<div>


<p className="
uppercase
tracking-[6px]
text-yellow-600
font-bold
">

Sobre o escritório

</p>



<h2 className="
text-6xl
font-black
mt-6
leading-tight
">

{data.nome}

</h2>



<p className="
text-xl
text-gray-500
mt-6
">

{especialidade}

</p>



<p className="
text-lg
leading-9
mt-8
text-gray-700
">

{
data.site?.sobre ||
"Um escritório comprometido com estratégia jurídica, atendimento personalizado e soluções eficientes."
}

</p>



</div>





<div className="
bg-black
text-white
rounded-3xl
p-10
shadow-2xl
">


<p className="
text-yellow-400
uppercase
tracking-widest
font-bold
">

Autoridade jurídica

</p>



<div className="
mt-8
space-y-8
">



<div>

<h3 className="
text-5xl
font-black
">

{anos}+

</h3>

<p className="
text-gray-300
">

anos de experiência

</p>

</div>



<div>

<h3 className="
text-2xl
font-bold
">

{oab}

</h3>

<p className="
text-gray-300
">

registro profissional

</p>

</div>




<div>

<h3 className="
text-2xl
font-bold
">

Atendimento estratégico

</h3>

<p className="
text-gray-300
">

Foco em segurança e resultados

</p>

</div>



</div>



</div>



</div>


</section>

)

}



return (

<section
id="sobre"
className={`${theme.colors.secondary} py-28`}
>

<div
className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-16
items-center
"
>


<div>


<p
className="
uppercase
tracking-[5px]
font-bold
text-yellow-500
"
>

Sobre o escritório

</p>


<h2
className={`
${theme.colors.title}
text-5xl
font-bold
mt-6
`}
>

{data.nome}

</h2>



<p
className={`
${theme.colors.paragraph}
text-xl
mt-4
`}
>

{data.cidade || "São Paulo"}

</p>



<p
className={`
${theme.colors.paragraph}
text-lg
leading-9
mt-8
`}
>

{
data.site?.sobre ||
"Um escritório comprometido com soluções jurídicas estratégicas."
}

</p>


</div>



<div
className={`
${theme.card.className}
p-10
rounded-3xl
`}
>


<h3
className="
text-3xl
font-bold
mb-8
"
>

Por que escolher nosso escritório?

</h3>


<div className="space-y-5">

<p>
✓ Atendimento personalizado
</p>

<p>
✓ Estratégia jurídica eficiente
</p>

<p>
✓ Compromisso com resultados
</p>


</div>


</div>


</div>


</section>

)


}