import { prisma } from "@/lib/prisma";
import ConverterLeadButton from "@/components/admin/ConverterLeadButton";

export default async function Leads(){

  const leads = await prisma.lead.findMany({

    orderBy:{
      criadoEm:"desc"
    }

  });


  return (

    <main className="
    min-h-screen
    bg-gray-50
    p-10
    ">

      <div className="
      max-w-5xl
      mx-auto
      ">

        <h1 className="
        text-4xl
        font-bold
        mb-10
        ">
          Leads recebidos
        </h1>



        <div className="
        grid
        gap-6
        ">


        {
        leads.map((lead: any)=>(


          <div

          key={lead.id}

          className="
          bg-white
          p-8
          rounded-3xl
          shadow-sm
          border
          "

          >


            <h2 className="
            text-2xl
            font-bold
            ">
              {lead.nome}
            </h2>


            <p className="mt-2">
              {lead.escritorio || "Escritório não informado"}
            </p>


            <p className="
            mt-4
            font-bold
            ">
              Status: {lead.status}
            </p>



            <p className="mt-3">
              📱 {lead.whatsapp}
            </p>


            <p>
              ✉️ {lead.email || "Sem email"}
            </p>


            <p>
              🌐 {lead.tipoSite || "Site jurídico"}
            </p>



            <p className="mt-4">
              {lead.mensagem || "Sem mensagem"}
            </p>



            <p className="mt-4 text-gray-500">

              Recebido em:

              {" "}

              {
              new Date(lead.criadoEm)
              .toLocaleDateString("pt-BR")
              }

            </p>




            <div className="flex gap-3 flex-wrap mt-6">


              <a

              href={
              `https://wa.me/${lead.whatsapp.replace(/\D/g,"")}?text=${encodeURIComponent(
              "Olá " + lead.nome + ", tudo bem? Vi sua solicitação sobre criação de site jurídico e gostaria de conversar melhor."
              )}`
              }

              target="_blank"

              className="
              bg-green-600
              text-white
              px-6
              py-3
              rounded-xl
              font-bold
              hover:scale-105
              transition
              "

              >

              📱 Chamar no WhatsApp

              </a>




              <ConverterLeadButton leadId={lead.id}/>


            </div>


          </div>


        ))
        }


        </div>


      </div>


    </main>

  );

}