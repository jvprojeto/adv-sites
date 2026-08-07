import { prisma } from "@/lib/prisma";
import CriarSiteButton from "@/components/admin/CriarSiteButton";
import WhatsAppProposta from "@/components/admin/whatsAppProposta";
import CopiarLink from "@/components/admin/CopiarLink";

export default async function ClientesPage() {

const clientes = await prisma.cliente.findMany({

  orderBy:{
    criadoEm:"desc"
  },

  include:{
    site:true
  }

});


return (

<main className="
min-h-screen
bg-gray-50
p-10
">


<div className="
max-w-6xl
mx-auto
">


<h1 className="
text-4xl
font-bold
mb-10
">

Solicitações de sites

</h1>



<div className="
bg-white
rounded-3xl
shadow
overflow-hidden
">


<table className="w-full">


<thead className="
bg-black
text-white
">


<tr>

<th className="p-5 text-left">
Escritório
</th>

<th className="p-5 text-left">
WhatsApp
</th>

<th className="p-5 text-left">
Cidade
</th>

<th className="p-5 text-left">
Status
</th>

<th className="p-5 text-left">
Ações
</th>

</tr>


</thead>



<tbody>


{
clientes.map((cliente)=>(


<tr
key={cliente.id}
className="border-b"
>


<td className="
p-5
font-semibold
">

{cliente.nome}

</td>



<td className="p-5">

{cliente.whatsapp || "-"}

</td>



<td className="p-5">

{cliente.cidade || "-"}

</td>



<td className="p-5">


{
cliente.site

?

<span className="
text-green-600
font-bold
">

Site criado

</span>


:

<span className="
text-gray-500
">

Aguardando

</span>

}


</td>



<td className="p-5">


{
cliente.site

?

<div
className="
flex
gap-3
flex-wrap
"
>


<a
href={`/site/${cliente.slug}`}
target="_blank"
className="
bg-black
text-white
px-4
py-2
rounded-xl
font-bold
"
>

🌐 Ver site

</a>



<CopiarLink

link={`/site/${cliente.slug}`}

/>



<a

href={`/proposta/${cliente.slug}`}

target="_blank"

className="
bg-yellow-500
text-black
px-4
py-2
rounded-xl
font-bold
"

>

Proposta

</a>



<WhatsAppProposta

cliente={cliente}

/>



</div>


:

<CriarSiteButton

clienteId={cliente.id}

/>


}


</td>


</tr>


))

}


</tbody>


</table>


</div>


</div>


</main>

);

}