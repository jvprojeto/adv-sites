export default function Areas() {


const services = [

{
title:"Sites jurídicos profissionais",
text:"Criamos sites modernos para transmitir autoridade, confiança e transformar visitantes em novos contatos."
},

{
title:"Landing pages de alta conversão",
text:"Páginas focadas em uma área específica do escritório para gerar mais oportunidades."
},

{
title:"Identidade digital",
text:"Estruturamos apresentação, cores, textos e posicionamento para destacar seu escritório."
},

{
title:"Otimização para WhatsApp",
text:"Criamos caminhos rápidos para transformar visitantes em conversas com seu escritório."
},

{
title:"Manutenção e evolução",
text:"Acompanhamos o site após a publicação com melhorias e atualizações."
},

{
title:"Soluções personalizadas",
text:"Projetos adaptados para diferentes tamanhos e necessidades de escritórios."
}

];



return (

<section

id="servicos"

className="
py-24
bg-gray-50
"

>


<div

className="
max-w-7xl
mx-auto
px-6
"

>



<p

className="
text-yellow-600
uppercase
tracking-[4px]
font-semibold
text-center
"

>

Serviços

</p>




<h2

className="
text-5xl
font-bold
text-center
mt-4
"

>

Soluções digitais para escritórios de advocacia

</h2>




<p

className="
text-gray-600
text-xl
text-center
max-w-3xl
mx-auto
mt-6
"

>

Criamos presença digital profissional para escritórios
que querem conquistar mais autoridade e oportunidades.

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

services.map((service:any)=>(


<div

key={service.title}

className="
bg-white
rounded-3xl
p-8
shadow-sm
border
hover:shadow-xl
transition
"

>


<h3

className="
text-2xl
font-bold
"

>

{service.title}

</h3>



<p

className="
text-gray-600
mt-4
leading-7
"

>

{service.text}

</p>



</div>


))

}



</div>




</div>


</section>


);


}