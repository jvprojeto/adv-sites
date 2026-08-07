import { themes } from "@/themes";

type Props = {
  data:any;
};



export default function CTA({data}:Props){



const theme =
themes[
(data?.site?.template as keyof typeof themes)
||
"premium"
];




const whatsapp =
data?.whatsapp?.replace(/\D/g,"")
||
"";




const nome =
data?.nome
||
"nosso escritório";




return (



<section

className="
py-28
"

>



<div

className="
max-w-6xl
mx-auto
px-6
"

>



<div

className={`

${theme.colors.primary}

${theme.colors.text}

rounded-[40px]

p-12

md:p-20

text-center

relative

overflow-hidden

`}

>





<div

className="
absolute
inset-0
opacity-10
bg-gradient-to-br
from-yellow-400
to-transparent
"

/>






<div className="
relative
z-10
">





<p

className="
uppercase
tracking-[6px]
font-bold
text-yellow-500
"

>

Atendimento jurídico

</p>







<h2

className="
text-4xl
md:text-6xl
font-black
mt-6
leading-tight
"

>

Precisa de ajuda jurídica?

</h2>







<p

className="
mt-6
text-xl
opacity-80
max-w-3xl
mx-auto
"

>

Converse com a equipe do <strong>{nome}</strong> e receba uma avaliação inicial para entender o melhor caminho para o seu caso.

</p>







<div

className="
mt-8
flex
flex-col
md:flex-row
justify-center
gap-4
text-sm
opacity-80
"

>


<span>

✓ Atendimento personalizado

</span>


<span>

✓ Consulta inicial

</span>


<span>

✓ Estratégia jurídica

</span>



</div>









{

whatsapp &&


<a


href={`https://wa.me/${whatsapp}`}

target="_blank"


className="

inline-flex

items-center

justify-center

mt-10

bg-yellow-500

text-black

px-12

py-5

rounded-full

font-black

text-lg

shadow-xl

hover:scale-105

transition

"

>


Falar no WhatsApp


</a>



}





</div>





</div>





</div>


</section>



);


}