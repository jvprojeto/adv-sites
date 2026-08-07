import { themes } from "@/themes";

type Props = {
  data: any;
};

export default function Hero({ data }: Props) {

  const template =
    data?.site?.template || "premium";


  const theme =
    themes[
      template as keyof typeof themes
    ] || themes.premium;



  const whatsapp =
    data?.whatsapp?.replace(/\D/g, "") || "";



  const anos =
    data?.site?.anosExperiencia || "15";


  const oab =
    data?.site?.oab || "OAB/SP 123456";


  const cidade =
    data?.cidade || "São Paulo - SP";




  /*
    HERO PREMIUM
    Mantém o modelo mais elaborado
  */

  if (template === "premium") {


    return (

      <section className="
      bg-black
      text-white
      py-32
      ">


        <div className="
        max-w-7xl
        mx-auto
        px-6
        grid
        md:grid-cols-2
        gap-16
        items-center
        ">



          <div>


            <p className="
            text-yellow-400
            uppercase
            tracking-[5px]
            font-bold
            ">

              {oab}

            </p>



            <h1 className="
            text-6xl
            md:text-8xl
            font-black
            mt-6
            leading-none
            ">

              {data.nome}

            </h1>



            <h2 className="
            text-3xl
            mt-8
            font-bold
            ">

              {data.site?.slogan ||
              "Advocacia estratégica e personalizada"}

            </h2>



            <p className="
            text-xl
            text-gray-300
            mt-6
            ">

              {data.site?.descricao ||
              "Soluções jurídicas eficientes para proteger seus interesses."}

            </p>




            <a
              href={
                whatsapp
                ? `https://wa.me/${whatsapp}`
                : "#"
              }

              target="_blank"

              className="
              inline-block
              mt-10
              bg-yellow-500
              text-black
              px-8
              py-4
              rounded-2xl
              font-bold
              "
            >

              Agendar consulta

            </a>





            <div className="
            mt-12
            grid
            grid-cols-3
            gap-5
            text-center
            ">


              <div>

                <strong className="
                text-3xl
                font-black
                ">

                  {anos}+

                </strong>

                <p className="text-gray-400">
                  anos
                </p>

              </div>



              <div>

                <strong className="
                text-xl
                font-bold
                ">

                  {oab}

                </strong>

                <p className="text-gray-400">
                  registro
                </p>

              </div>



              <div>

                <strong className="
                text-xl
                font-bold
                ">

                  {cidade}

                </strong>

                <p className="text-gray-400">
                  local
                </p>

              </div>



            </div>



          </div>





          <div className="
          h-[600px]
          rounded-3xl
          overflow-hidden
          shadow-2xl
          ">


            <img

              src={
                data.imagemHero ||
                "/hero.jpg"
              }

              alt={data.nome}

              className="
              w-full
              h-full
              object-cover
              "

            />


          </div>



        </div>


      </section>

    );

  }




  /*
    OUTROS TEMPLATES
  */


  return (

    <section
      className={`
      ${theme.hero.container}
      py-32
      `}
    >


      <div className="
      max-w-7xl
      mx-auto
      px-6
      grid
      md:grid-cols-2
      gap-16
      items-center
      ">



        <div>



          {
            data.logo &&

            <img

              src={data.logo}

              alt="Logo"

              className="
              h-20
              mb-8
              object-contain
              "

            />

          }




          <p className="
          uppercase
          tracking-[6px]
          font-bold
          opacity-70
          ">

            Advocacia especializada

          </p>




          <h1 className={`
          ${theme.hero.title}
          mt-8
          leading-tight
          `}>

            {data.nome}

          </h1>





          <h2 className="
          mt-6
          text-2xl
          font-semibold
          ">

            {
              data.site?.slogan ||
              "Soluções jurídicas estratégicas"
            }

          </h2>





          <p className={`
          ${theme.hero.subtitle}
          mt-6
          `}>

            {
              data.site?.descricao ||
              "Atendimento jurídico personalizado."
            }

          </p>





          <a

            href={
              whatsapp
              ? `https://wa.me/${whatsapp}`
              : "#"
            }

            target="_blank"

            className={`
            inline-flex
            items-center
            mt-10
            ${theme.hero.button}
            `}
          >

            Solicitar atendimento

          </a>





          <div className="
          mt-10
          flex
          flex-col
          gap-3
          text-sm
          opacity-80
          ">


            <span>
              ✓ Atendimento personalizado
            </span>


            <span>
              ✓ Experiência jurídica
            </span>


            <span>
              ✓ Consulta inicial
            </span>


          </div>



        </div>





        <div className="
        relative
        rounded-3xl
        overflow-hidden
        h-[520px]
        shadow-2xl
        ">


          <img

            src={
              data.imagemHero ||
              "/hero.jpg"
            }

            alt={data.nome}

            className="
            w-full
            h-full
            object-cover
            "

          />


          <div className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/40
          to-transparent
          "/>


        </div>



      </div>


    </section>

  );

}