import { themes } from "@/themes";

type Props = {
  data:any;
};



export default function Footer({data}:Props){



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




return (



<footer

className={`

${theme.colors.primary}

${theme.colors.text}

py-20

`}

>



<div

className="
max-w-7xl
mx-auto
px-6
"

>



<div

className="
grid
md:grid-cols-4
gap-10
"

>






<div className="md:col-span-2">



<h2

className="
text-4xl
font-black
"

>

{data.nome}

</h2>





<p

className="
mt-6
text-gray-300
leading-8
max-w-xl
"

>

{

data.site?.descricao

||

"Atendimento jurídico estratégico, personalizado e focado nos melhores resultados para nossos clientes."

}

</p>





<div

className="
mt-8
space-y-3
text-sm
opacity-80
"

>



{

data.cidade &&

<p>

📍 {data.cidade}

</p>

}



{

data.email &&

<p>

✉️ {data.email}

</p>

}



{

data.telefone &&

<p>

☎️ {data.telefone}

</p>

}



</div>



</div>








<div>


<h3

className="
font-black
text-xl
mb-6
"

>

Escritório

</h3>



<div className="
space-y-3
opacity-80
">


<p>

Sobre nós

</p>


<p>

Áreas de atuação

</p>


<p>

Perguntas frequentes

</p>


<p>

Contato

</p>


</div>



</div>








<div>


<h3

className="
font-black
text-xl
mb-6
"

>

Atendimento

</h3>



<p className="
opacity-80
leading-7
"

>

Solicite uma avaliação inicial e converse com nossa equipe.

</p>




{

whatsapp &&


<a

href={`https://wa.me/${whatsapp}`}

target="_blank"

className="

inline-flex

mt-6

bg-yellow-500

text-black

px-8

py-3

rounded-full

font-black

hover:scale-105

transition

"

>


WhatsApp

</a>



}



</div>






</div>







<div

className="
border-t
border-white/20
mt-16
pt-8
text-sm
opacity-70
text-center
"

>


© {new Date().getFullYear()} {data.nome}. Todos os direitos reservados.



</div>






</div>


</footer>



);


}