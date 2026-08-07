import Link from "next/link";
import Image from "next/image";


type Props = {
  data:any;
};



export default function DemoHero({data}:Props){


const cliente = data;
const site = data?.site;



return (

<section className="
min-h-screen
pt-32
flex
items-center
bg-white
">


<div className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-16
items-center
">



<div>


<p className="
text-yellow-600
uppercase
tracking-[5px]
font-bold
">

{cliente?.cidade || "Advocacia Especializada"}

</p>



<h1 className="
text-5xl
md:text-6xl
font-bold
leading-tight
mt-6
text-gray-900
">


{site?.slogan || 
"Soluções jurídicas com estratégia e segurança."
}


</h1>



<p className="
text-xl
text-gray-600
mt-8
leading-relaxed
">


{site?.descricao ||
"Atendimento jurídico personalizado para proteger seus direitos."
}


</p>




<div className="
flex
gap-4
mt-10
">


<Link

href={`https://wa.me/${cliente?.whatsapp}?text=Olá, gostaria de falar com o escritório.`}

target="_blank"

className="
bg-black
text-white
px-10
py-4
rounded-xl
font-bold
"

>

Solicitar atendimento

</Link>



<a

href="#areas"

className="
border
px-10
py-4
rounded-xl
font-bold
"

>

Conhecer áreas

</a>



</div>



</div>





<div className="
relative
h-[500px]
rounded-3xl
overflow-hidden
shadow-2xl
">


<Image

src={cliente?.imagemHero || "/hero.jpg"}

alt={cliente?.nome || "Escritório"}

fill

priority

className="
object-cover
"

/>


<div className="
absolute
bottom-0
left-0
right-0
bg-black/60
text-white
p-6
">


<h3 className="
text-2xl
font-bold
">

{cliente.nome}

</h3>


<p>

Advocacia especializada

</p>


</div>



</div>



</div>


</section>

)

}