export default function About(){

return(

<section className="py-24">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">


<div>

<p className="text-yellow-600 uppercase tracking-[4px] font-semibold">
Sobre nós
</p>


<h2 className="text-5xl font-bold mt-4">
Criamos presença digital para escritórios que querem autoridade.
</h2>


<p className="text-gray-600 text-xl mt-6">
A ADV Sites cria sites profissionais para advogados,
unindo design premium, estratégia e geração de novos contatos.
</p>


</div>


<div className="
rounded-3xl
overflow-hidden
shadow-2xl
">

<img

src="/images/sobre.jpg"

alt="ADV Sites criação de sites jurídicos"

className="
w-full
h-96
object-cover
"

/>

</div>


</div>

</section>

)

}