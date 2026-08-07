export default function Footer() {

  return (

    <footer className="
    bg-zinc-950
    text-white
    py-16
    ">

      <div className="
      max-w-7xl
      mx-auto
      px-6
      ">


        <div className="
        grid
        md:grid-cols-3
        gap-10
        ">


          <div>

            <h2 className="
            text-4xl
            font-black
            ">

              ADV
              <span className="
              text-yellow-500
              ">
                Sites
              </span>

            </h2>


            <p className="
            text-gray-400
            mt-4
            max-w-sm
            ">

              Presença digital profissional para escritórios de advocacia que querem transmitir autoridade e confiança.

            </p>


          </div>





          <div>

            <h3 className="
            font-bold
            text-lg
            mb-4
            ">

              Links

            </h3>


            <div className="
            flex
            flex-col
            gap-3
            text-gray-400
            ">

              <a href="#inicio">
                Início
              </a>

              <a href="#processo">
                Como funciona
              </a>

              <a href="#portfolio">
                Portfólio
              </a>

              <a href="#faq">
                Perguntas frequentes
              </a>


            </div>


          </div>






          <div>

            <h3 className="
            font-bold
            text-lg
            mb-4
            ">

              Contato

            </h3>



            <div className="
            text-gray-400
            space-y-3
            ">


              <p>
                📍 São Paulo - SP
              </p>


              <p>
                📱 WhatsApp: (11) 94815-6665
              </p>


              <p>
                ✉️ contato@advsites.com.br
              </p>


            </div>


          </div>



        </div>





        <div className="
        border-t
        border-zinc-800
        mt-12
        pt-8
        text-center
        text-gray-500
        text-sm
        ">


          © 2026 ADV Sites. Todos os direitos reservados.


        </div>



      </div>


    </footer>

  );

}