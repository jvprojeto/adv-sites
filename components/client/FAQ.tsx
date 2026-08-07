import { themes } from "@/themes";

type Props = {
  data:any;
};



const fallbackFaqs = [

{
id:1,
pergunta:"Como funciona o atendimento jurídico?",
resposta:
"Realizamos uma análise inicial do caso para entender o cenário, identificar oportunidades e definir a melhor estratégia jurídica."
},


{
id:2,
pergunta:"O escritório realiza atendimento online?",
resposta:
"Sim. O atendimento digital permite mais praticidade, segurança e acompanhamento personalizado."
},


{
id:3,
pergunta:"Como faço para agendar uma consulta?",
resposta:
"Basta entrar em contato pelo WhatsApp para solicitar uma avaliação inicial."
},


{
id:4,
pergunta:"Quais áreas jurídicas são atendidas?",
resposta:
"O escritório atua em diferentes áreas jurídicas oferecendo soluções personalizadas para cada situação."
}

];





export default function FAQ({data}:Props){



const theme =
themes[
(data?.site?.template as keyof typeof themes)
||
"premium"
];




const faqs =
data?.site?.faqs?.length
?
data.site.faqs
:
fallbackFaqs;





return (



<section

id="faq"

className={`
${theme.colors.secondary}
py-28
`}

>



<div className="
max-w-6xl
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

Dúvidas

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

Perguntas frequentes

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

Confira as principais dúvidas sobre atendimento, serviços e funcionamento do escritório.

</p>






<div

className="
grid
md:grid-cols-2
gap-8
mt-16
"

>



{

faqs.map((faq:any,index:number)=>(



<div

key={faq.id}

className={`

${theme.card.className}

p-8

rounded-3xl

transition

hover:-translate-y-2

duration-300

`}

>




<div className="
flex
items-center
justify-between
mb-6
">




<span

className="
w-12
h-12
rounded-full
bg-yellow-500
text-black
flex
items-center
justify-center
font-black
text-xl
"

>

{index+1}

</span>




<span className="
text-3xl
">

❓

</span>



</div>






<h3

className={`
${theme.colors.title}
text-xl
font-black
leading-tight
`}

>

{faq.pergunta}

</h3>






<p

className={`
${theme.colors.paragraph}
mt-5
leading-8
`}

>

{faq.resposta}

</p>





</div>



))

}



</div>





</div>


</section>


);


}