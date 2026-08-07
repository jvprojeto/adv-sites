import Hero from "./Hero";
import About from "./About";
import Areas from "./Areas";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import WhatsAppFloat from "./WhatsAppFloat";


export default function TemplateRenderer({data}:any){


const template =
data?.site?.template || "premium";



const templates:any = {


premium:{
  wrapper:
  "bg-white text-gray-900"
},


executivo:{
  wrapper:
  "bg-slate-950 text-white"
},


minimalista:{
  wrapper:
  "bg-white text-black"
},


empresarial:{
  wrapper:
  "bg-blue-950 text-white"
},


tribunal:{
  wrapper:
  "bg-neutral-950 text-white"
}


};



const style =
templates[template]
||
templates.premium;



return (

<main
className={style.wrapper}
>



<Hero data={data}/>




{
template === "executivo" &&

<section
className="
py-32
bg-slate-900
"
>

<div
className="
max-w-6xl
mx-auto
px-6
"
>

<h2
className="
text-7xl
font-black
uppercase
"
>

Estratégia.
<br/>

Experiência.
<br/>

Resultados.

</h2>


<p
className="
mt-8
text-2xl
text-slate-300
"
>

Escritório preparado para decisões importantes.

</p>


</div>

</section>

}





{
template === "empresarial" &&

<section
className="
py-32
bg-blue-900
"
>

<div
className="
max-w-6xl
mx-auto
px-6
"
>

<h2
className="
text-6xl
font-bold
"
>

Direito estratégico para empresas.

</h2>

</div>


</section>

}




{
template === "tribunal" &&

<section
className="
py-32
bg-black
text-center
"
>

<h2
className="
text-6xl
font-serif
"
>

Tradição.
<br/>

Autoridade.
<br/>

Confiança.

</h2>


</section>

}





{
template === "minimalista" &&

<section
className="
py-40
text-center
"
>

<h2
className="
text-7xl
font-light
"
>

Advocacia
<br/>

simples.
<br/>

Elegante.

</h2>


<p
className="
mt-8
text-xl
text-gray-500
"
>

Clareza e eficiência jurídica.

</p>


</section>

}





<About data={data}/>


<Areas data={data}/>



{
template !== "minimalista" &&
<Testimonials data={data}/>
}



<FAQ data={data}/>


<Footer data={data}/>



<WhatsAppFloat data={data}/>



</main>

);

}