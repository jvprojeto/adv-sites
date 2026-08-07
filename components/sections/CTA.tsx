
import { contact } from "@/data/contact";


export default function CTA() {


const whatsapp =
"5511948156665";


const mensagem =
encodeURIComponent(
"Olá, vim pelo site da ADV Sites e gostaria de criar um site para meu escritório."
);



return (

<section className="py-28 bg-black text-white">


<div className="max-w-5xl mx-auto px-6 text-center">


<h2 className="text-5xl font-bold leading-tight">

Seu escritório merece
<br />
um site que transmite autoridade.

</h2>



<p className="text-gray-300 text-xl mt-8">

Solicite uma proposta gratuita ou fale diretamente
com nossa equipe.

</p>




<div className="
flex
flex-col
md:flex-row
justify-center
gap-5
mt-10
">


<a

href={
`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`
}

target="_blank"

className="
inline-block
mt-10
bg-yellow-500
text-black
px-10
py-5
rounded-xl
font-bold
hover:opacity-90
transition
"

>
Solicitar orçamento
</a>



<a

href={`https://wa.me/${whatsapp}?text=${mensagem}`}

target="_blank"

className="
border
border-white
px-10
py-5
rounded-xl
font-bold
hover:bg-white
hover:text-black
transition
"

>

Falar no WhatsApp

</a>



</div>


</div>


</section>


);

}