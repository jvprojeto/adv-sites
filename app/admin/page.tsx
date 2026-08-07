import { prisma } from "@/lib/prisma";
import Link from "next/link";


export default async function AdminPage() {


  const clientes = await prisma.cliente.count();

  const sites = await prisma.site.count();

  const publicados = await prisma.site.count({
    where:{
      publicado:true
    }
  });

  const leads = await prisma.lead.count();



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
        text-5xl
        font-black
        mb-3
        ">

          ADV Sites Admin

        </h1>


        <p className="
        text-gray-600
        mb-12
        text-lg
        ">

          Gerencie clientes, sites e propostas.

        </p>





        <div className="
        grid
        md:grid-cols-4
        gap-6
        mb-12
        ">



          <div className="
          bg-white
          rounded-3xl
          shadow
          p-8
          ">

            <p className="text-gray-500">
              Clientes
            </p>

            <h2 className="
            text-5xl
            font-black
            mt-3
            ">

              {clientes}

            </h2>

          </div>





          <div className="
          bg-white
          rounded-3xl
          shadow
          p-8
          ">

            <p className="text-gray-500">
              Sites
            </p>

            <h2 className="
            text-5xl
            font-black
            mt-3
            ">

              {sites}

            </h2>

          </div>





          <div className="
          bg-white
          rounded-3xl
          shadow
          p-8
          ">

            <p className="text-gray-500">
              Publicados
            </p>

            <h2 className="
            text-5xl
            font-black
            mt-3
            text-green-600
            ">

              {publicados}

            </h2>

          </div>





          <div className="
          bg-white
          rounded-3xl
          shadow
          p-8
          ">

            <p className="text-gray-500">
              Leads
            </p>

            <h2 className="
            text-5xl
            font-black
            mt-3
            ">

              {leads}

            </h2>

          </div>



        </div>





        <div className="
        bg-white
        rounded-3xl
        shadow
        p-10
        ">



          <h2 className="
          text-3xl
          font-black
          mb-8
          ">

            Ações rápidas

          </h2>





          <div className="
          grid
          md:grid-cols-3
          gap-5
          ">



            <Link

            href="/admin/clientes"

            className="
            bg-black
            text-white
            p-6
            rounded-2xl
            font-bold
            text-center
            "

            >

              Ver clientes

            </Link>





            <Link

            href="/admin/sites"

            className="
            bg-green-600
            text-white
            p-6
            rounded-2xl
            font-bold
            text-center
            "

            >

              Gerenciar sites

            </Link>





            <Link

            href="/admin/leads"

            className="
            bg-yellow-500
            p-6
            rounded-2xl
            font-bold
            text-center
            "

            >

              Ver leads

            </Link>



          </div>



        </div>




      </div>


    </main>

  );

}