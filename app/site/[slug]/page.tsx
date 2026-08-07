import { prisma } from "@/lib/prisma";
import TemplateRenderer from "@/components/client/TemplateRenderer";
import DemoBar from "@/components/client/DemoBar";

export const dynamic = "force-dynamic";


export default async function SitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {


  const { slug } = await params;


  const cliente = await prisma.cliente.findUnique({

    where: {
      slug
    },

    include: {

      site: {

        include: {

          areas: true,

          faqs: true,

          depoimentos: true

        }

      }

    }

  });



  if (!cliente) {

    return (

      <main className="
      min-h-screen
      flex
      items-center
      justify-center
      ">

        <h1 className="
        text-3xl
        font-bold
        ">

          Site não encontrado.

        </h1>

      </main>

    );

  }



  return (

<main>

{
cliente.site?.publicado ?

<TemplateRenderer data={cliente}/>

:

<div className="
min-h-screen
flex
items-center
justify-center
bg-gray-100
p-10
">

<div className="
bg-white
rounded-3xl
shadow-xl
p-10
text-center
max-w-xl
">

<h1 className="
text-4xl
font-bold
mb-6
">

Site em preparação 🚀

</h1>


<p className="
text-gray-600
text-lg
">

Este site ainda está sendo configurado pelo escritório.

</p>


</div>

</div>

}


{
!cliente.site?.publicado &&

<DemoBar data={cliente}/>

}


</main>

);

}