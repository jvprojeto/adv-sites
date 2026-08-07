import Link from "next/link";

export default function Obrigado(){

return (

<main className="
min-h-screen
flex
items-center
justify-center
bg-black
text-white
p-6
">


<div className="
max-w-xl
text-center
">


<h1 className="
text-5xl
font-black
">

Solicitação recebida.

</h1>


<p className="
text-gray-300
text-xl
mt-6
">

Obrigado pelo interesse na ADV Sites.
Nossa equipe analisará seu pedido e entrará em contato em breve.

</p>


<Link

href="/"

className="
inline-block
mt-10
bg-yellow-500
text-black
px-8
py-4
rounded-xl
font-bold
"

>

Voltar ao site

</Link>


</div>


</main>

)

}