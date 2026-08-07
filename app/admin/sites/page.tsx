import { prisma } from "@/lib/prisma";
import Link from "next/link";


export default async function SitesPage() {


  const sites = await prisma.site.findMany({

    include:{
      cliente:true
    },

    orderBy:{
      cliente:{
        criadoEm:"desc"
      }
    }

  });



  return (

    <main className="
    min-h-screen
    bg-gray-100
    p-10
    ">


      <div className="
      max-w-6xl
      mx-auto
      ">


        <h1 className="
        text-4xl
        font-black
        mb-10
        ">

          Sites criados

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
                  Template
                </th>


                <th className="p-5 text-left">
                  Status
                </th>


                <th className="p-5 text-left">
                  Investimento
                </th>


                <th className="p-5 text-left">
                  Ações
                </th>


              </tr>


            </thead>




            <tbody>


            {
            sites.map((site:any)=>(


              <tr
              key={site.id}
              className="border-b"
              >



                <td className="
                p-5
                font-bold
                ">

                  {site.cliente.nome}

                </td>




                <td className="p-5">

                  {site.template}

                </td>




                <td className="p-5">


                  {
                  site.publicado

                  ?

                  <span className="
                  text-green-600
                  font-bold
                  ">

                    Publicado

                  </span>


                  :

                  <span className="
                  text-gray-500
                  ">

                    Rascunho

                  </span>

                  }


                </td>





                <td className="p-5">


                  <p className="font-bold">

                    R$ {site.valor.toLocaleString("pt-BR")}

                  </p>



                  <p className="
                  text-sm
                  text-gray-500
                  ">

                    Manutenção:
                    R$ {site.manutencao.toLocaleString("pt-BR")}

                  </p>



                  <p className="
                  text-sm
                  text-gray-500
                  ">

                    {site.prazo}

                  </p>


                </td>





                <td className="p-5">


  <div className="
  flex
  gap-3
  flex-wrap
  ">



    <Link

    href={`/admin/sites/${site.id}`}

    className="
    bg-black
    text-white
    px-4
    py-2
    rounded-xl
    font-bold
    "

    >

      Editar

    </Link>




    <Link

    href={`/site/${site.cliente.slug}`}

    target="_blank"

    className="
    bg-green-600
    text-white
    px-4
    py-2
    rounded-xl
    font-bold
    "

    >

      Site

    </Link>




    <Link

    href={`/proposta/${site.cliente.slug}`}

    target="_blank"

    className="
    bg-yellow-500
    px-4
    py-2
    rounded-xl
    font-bold
    "

    >

      Proposta

    </Link>



  </div>


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