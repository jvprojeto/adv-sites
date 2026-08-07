import { prisma } from "@/lib/prisma";
import Link from "next/link";
import EditorSite from "@/components/admin/EditorSite";
import GerarIA from "@/components/admin/GerarIA";

import { atualizarSite } from "./actions";
import { criarArea, removerArea } from "./areaActions";
import { criarFAQ, removerFAQ } from "./faqActions";
import { criarDepoimento, removerDepoimento } from "./depoimentoActions";
import { publicarSite, despublicarSite } from "./publicarActions";


export default async function EditarSitePage({
  params,
}: {
  params: Promise<{ id:string }>
}) {


  const { id } = await params;
  


  const site = await prisma.site.findUnique({

    where:{
      id
    },

    include:{
      cliente:true,
      areas:true,
      faqs:true,
      depoimentos:true
    }

  });



  if(!site){

    return (

      <main className="p-10">

        <h1 className="text-3xl font-bold">
          Site não encontrado
        </h1>

      </main>

    );

  }



  const templates = [

    {
      id:"premium",
      nome:"Premium",
      descricao:"Elegância, autoridade e sofisticação."
    },

    {
      id:"executivo",
      nome:"Executivo",
      descricao:"Imagem forte para escritórios de alto padrão."
    },

    {
      id:"empresarial",
      nome:"Empresarial",
      descricao:"Ideal para advocacia corporativa."
    },

    {
      id:"tribunal",
      nome:"Tribunal",
      descricao:"Clássico, tradicional e institucional."
    },

    {
      id:"minimalista",
      nome:"Minimalista",
      descricao:"Design moderno e objetivo."
    }

  ];



  return (

    <main className="
    min-h-screen
    bg-gray-100
    p-10
    ">


      <div className="
      max-w-5xl
      mx-auto
      ">


        <Link
        href="/admin/sites"
        className="text-gray-600"
        >

          ← Voltar

        </Link>




        <div className="
        bg-white
        rounded-3xl
        shadow
        p-10
        mt-6
        ">


          <h1 className="
          text-4xl
          font-black
          mb-8
          ">

            Editar {site.cliente.nome}

          </h1>



          <div className="mb-8">

  <GerarIA

cliente={{
  id: site.cliente.id,
  nome: site.cliente.nome,
  cidade: site.cliente.cidade,
  whatsapp: site.cliente.whatsapp,
  site:{
    id: site.id
  }
}}

/>

</div>



          <div className="mb-8">


          {
            site.publicado ?


            <form action={despublicarSite.bind(null,id)}>

              <button
              className="
              bg-red-600
              text-white
              px-6
              py-3
              rounded-xl
              font-bold
              "
              >

                Despublicar site

              </button>


            </form>


            :


            <form action={publicarSite.bind(null,id)}>

              <button
              className="
              bg-green-600
              text-white
              px-6
              py-3
              rounded-xl
              font-bold
              "
              >

                Publicar site

              </button>


            </form>


          }


          </div>




          <form
          action={atualizarSite.bind(null,id)}
          className="space-y-8"
          >



            <div>


              <label className="
              font-bold
              text-xl
              ">

                Escolha o modelo do site

              </label>



              <div className="
              grid
              md:grid-cols-2
              gap-5
              mt-5
              ">


              {
                templates.map((item)=>(


                  <label
key={item.id}
htmlFor={item.id}
className={`
cursor-pointer
rounded-3xl
border
p-6
transition
hover:scale-105

${
site.template === item.id
?
"border-black bg-black text-white"
:
"bg-gray-100"
}

peer-checked:border-black
peer-checked:bg-black
peer-checked:text-white

`}
>


                    <input

type="radio"

id={item.id}

name="template"

value={item.id}

defaultChecked={
  site.template === item.id
}

className="peer hidden"

/>


                    <h3 className="
                    text-xl
                    font-bold
                    ">

                      {item.nome}

                    </h3>


                    <p className="
                    mt-3
                    text-sm
                    opacity-80
                    ">

                      {item.descricao}

                    </p>


                  </label>


                ))
              }


              </div>


            </div>

                        <div>

              <label className="font-bold">
                Slogan
              </label>


              <input

              name="slogan"

              defaultValue={site.slogan}

              className="
              w-full
              mt-2
              bg-gray-100
              p-4
              rounded-xl
              "

              />

            </div>




            <div>

              <label className="font-bold">
                Descrição
              </label>


              <textarea

              name="descricao"

              defaultValue={site.descricao}

              className="
              w-full
              mt-2
              bg-gray-100
              p-4
              rounded-xl
              h-32
              "

              />

            </div>




            <div>

              <label className="font-bold">
                Sobre
              </label>


              <textarea

              name="sobre"

              defaultValue={site.sobre}

              className="
              w-full
              mt-2
              bg-gray-100
              p-4
              rounded-xl
              h-40
              "

              />

            </div>




            <div>

              <label className="font-bold">
                Valor do site
              </label>


              <input

              name="valor"

              type="number"

              defaultValue={site.valor}

              className="
              w-full
              mt-2
              bg-gray-100
              p-4
              rounded-xl
              "

              />

            </div>





            <div>

              <label className="font-bold">
                Manutenção mensal
              </label>


              <input

              name="manutencao"

              type="number"

              defaultValue={site.manutencao}

              className="
              w-full
              mt-2
              bg-gray-100
              p-4
              rounded-xl
              "

              />

            </div>





            <div>

              <label className="font-bold">
                Prazo de entrega
              </label>


              <input

              name="prazo"

              defaultValue={site.prazo}

              className="
              w-full
              mt-2
              bg-gray-100
              p-4
              rounded-xl
              "

              />

            </div>




            <button

            type="submit"

            className="
            bg-black
            text-white
            px-8
            py-4
            rounded-2xl
            font-bold
            hover:opacity-80
            "

            >

              Salvar alterações

            </button>



          </form>





          <div className="mt-16">


            <h2 className="
            text-3xl
            font-black
            mb-6
            ">

              Áreas de atuação

            </h2>





            <form

            action={criarArea.bind(null,id)}

            className="
            flex
            gap-4
            mb-8
            "

            >


              <input

              name="titulo"

              placeholder="Ex: Direito Empresarial"

              className="
              flex-1
              bg-gray-100
              p-4
              rounded-xl
              "

              />



              <button

              className="
              bg-black
              text-white
              px-6
              rounded-xl
              font-bold
              "

              >

                Adicionar

              </button>


            </form>





            <div className="space-y-3">


            {

            site.areas.map((area)=>(


              <div

              key={area.id}

              className="
              bg-gray-200
              p-4
              rounded-xl
              flex
              justify-between
              "

              >


                <span className="font-bold">

                  {area.titulo}

                </span>




                <form

                action={removerArea.bind(null,area.id,id)}

                >


                  <button

                  className="
                  text-red-600
                  font-bold
                  "

                  >

                    Excluir

                  </button>


                </form>



              </div>


            ))

            }


            </div>



          </div>


                    <div className="mt-16">


            <h2 className="
            text-3xl
            font-black
            mb-6
            ">

              Perguntas Frequentes

            </h2>




            <form

            action={criarFAQ.bind(null,id)}

            className="
            space-y-4
            mb-8
            "

            >


              <input

              name="pergunta"

              placeholder="Ex: Como funciona uma consulta?"

              className="
              w-full
              bg-gray-100
              p-4
              rounded-xl
              "

              />




              <textarea

              name="resposta"

              placeholder="Resposta"

              className="
              w-full
              bg-gray-100
              p-4
              rounded-xl
              h-32
              "

              />




              <button

              className="
              bg-black
              text-white
              px-8
              py-3
              rounded-xl
              font-bold
              "

              >

                Adicionar FAQ

              </button>


            </form>






            <div className="space-y-4">


            {

            site.faqs.map((faq)=>(


              <div

              key={faq.id}

              className="
              bg-gray-100
              p-5
              rounded-xl
              "

              >


                <h3 className="
                font-bold
                text-lg
                ">

                  {faq.pergunta}

                </h3>



                <p className="
                text-gray-600
                mt-2
                ">

                  {faq.resposta}

                </p>




                <form

                action={removerFAQ.bind(null,faq.id,id)}

                className="mt-3"

                >


                  <button

                  className="
                  text-red-600
                  font-bold
                  "

                  >

                    Excluir

                  </button>


                </form>


              </div>


            ))

            }


            </div>


          </div>





          <div className="mt-16">


            <h2 className="
            text-3xl
            font-black
            mb-6
            ">

              Depoimentos

            </h2>




            <form

            action={criarDepoimento.bind(null,id)}

            className="
            space-y-4
            mb-8
            "

            >


              <input

              name="nome"

              placeholder="Nome do cliente"

              className="
              w-full
              bg-gray-100
              p-4
              rounded-xl
              "

              />




              <textarea

              name="texto"

              placeholder="Depoimento"

              className="
              w-full
              bg-gray-100
              p-4
              rounded-xl
              h-32
              "

              />




              <button

              className="
              bg-black
              text-white
              px-8
              py-3
              rounded-xl
              font-bold
              "

              >

                Adicionar depoimento

              </button>


            </form>






            <div className="space-y-4">


            {

            site.depoimentos.map((dep)=>(


              <div

              key={dep.id}

              className="
              bg-gray-100
              p-5
              rounded-xl
              "

              >


                <h3 className="
                font-bold
                text-lg
                ">

                  {dep.nome}

                </h3>



                <p className="
                mt-2
                text-gray-600
                ">

                  {dep.texto}

                </p>




                <form

                action={
                  removerDepoimento.bind(null,dep.id,id)
                }

                className="mt-3"

                >


                  <button

                  className="
                  text-red-600
                  font-bold
                  "

                  >

                    Excluir

                  </button>


                </form>


              </div>


            ))

            }


            </div>



          </div>



        </div>


      </div>


    </main>

  );


}