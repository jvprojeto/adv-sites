import { criarSiteDemo } from "./actions";


export default function NovoSitePage(){


  return (

    <main className="
    min-h-screen
    bg-gray-100
    p-10
    ">


      <div className="
      max-w-3xl
      mx-auto
      ">


        <div className="
        bg-white
        rounded-3xl
        shadow
        p-10
        ">


          <h1 className="
          text-4xl
          font-black
          mb-8
          ">

            Criar Site Demo

          </h1>




          <form
          action={criarSiteDemo}
          className="space-y-6"
          >



            <div>

              <label className="font-bold">
                Nome do escritório
              </label>


              <input

              name="nome"

              placeholder="Ex: Silva Advocacia"

              className="
              w-full
              mt-2
              bg-gray-100
              p-4
              rounded-xl
              "

              required

              />

            </div>





            <div>

              <label className="font-bold">
                Cidade
              </label>


              <input

              name="cidade"

              placeholder="São Paulo"

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
                WhatsApp
              </label>


              <input

              name="whatsapp"

              placeholder="5511999999999"

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
                Especialidade
              </label>


              <input

              name="especialidade"

              placeholder="Direito Trabalhista"

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

            className="
            bg-black
            text-white
            px-8
            py-4
            rounded-xl
            font-bold
            "

            >

              Gerar Site Demo 🚀

            </button>




          </form>



        </div>


      </div>


    </main>

  );

}