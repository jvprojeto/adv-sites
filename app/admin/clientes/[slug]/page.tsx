import { prisma } from "@/lib/prisma";

import EditorSite from "@/components/admin/EditorSite";
import AdicionarArea from "@/components/admin/AdicionarArea";
import AdicionarFAQ from "@/components/admin/AdicionarFAQ";
import AdicionarDepoimento from "@/components/admin/AdicionarDepoimento";
import TemplateSelector from "@/components/admin/TemplateSelector";
import PublicarSite from "@/components/admin/PublicarSite";


export default async function EditarCliente({

  params,

}: {

  params: Promise<{ slug:string }>

}) {


  const { slug } = await params;



  const cliente = await prisma.cliente.findUnique({

    where:{
      slug
    },

    include:{

      site:{
        include:{
          areas:true,
          faqs:true,
          depoimentos:true
        }
      }

    }

  });




  if(!cliente){

    return (

      <main className="p-10">

        Cliente não encontrado.

      </main>

    );

  }





  return (

    <main className="
    min-h-screen
    bg-gray-50
    p-10
    ">



      <div className="
      max-w-5xl
      mx-auto
      bg-white
      rounded-3xl
      p-10
      shadow
      ">



        <h1 className="
        text-4xl
        font-bold
        mb-10
        ">

          Editando:
          {" "}
          {cliente.nome}

        </h1>





        {/* EDITOR PRINCIPAL */}

        <EditorSite cliente={cliente} />





        {/* PUBLICAR SITE */}

        <div className="my-8">


          <PublicarSite

            siteId={cliente.site?.id!}

            publicado={cliente.site?.publicado ?? false}

          />


        </div>





        <hr className="my-10"/>





        {/* TEMPLATE */}

        <TemplateSelector

          clienteId={cliente.id}

          templateAtual={cliente.site?.template ?? "premium"}

        />





        <hr className="my-10"/>





        {/* CONTEÚDOS EXTRAS */}

        <AdicionarArea

          siteId={cliente.site?.id!}

        />



        <AdicionarFAQ

          siteId={cliente.site?.id!}

        />



        <AdicionarDepoimento

          siteId={cliente.site?.id!}

        />




      </div>


    </main>

  );


}