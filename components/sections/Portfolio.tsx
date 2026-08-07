"use client";

import Link from "next/link";

const projects = [
  {
    title: "Modelo Premium",
    area: "Advocacia Empresarial",
    slug: "premium",
    image: "/images/premium.jpg",
    description:
      "Design sofisticado para escritórios que desejam transmitir autoridade e conquistar clientes de maior valor.",
  },
  {
    title: "Modelo Executivo",
    area: "Grandes Escritórios",
    slug: "executivo",
    image: "/images/executivo.jpg",
    description:
      "Layout elegante para escritórios consolidados que valorizam imagem institucional e credibilidade.",
  },
  {
    title: "Modelo Minimalista",
    area: "Advocacia Moderna",
    slug: "minimalista",
    image: "/images/minimalista.jpg",
    description:
      "Visual limpo, objetivo e altamente focado na experiência do usuário e conversão.",
  },
];

export default function Portfolio() {

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="
          uppercase
          tracking-[6px]
          text-yellow-600
          font-bold
          ">
            Portfólio
          </p>


          <h2 className="
          text-5xl
          font-black
          mt-5
          ">
            Modelos desenvolvidos para advocacia
          </h2>


          <p className="
          text-gray-600
          text-xl
          mt-6
          max-w-3xl
          mx-auto
          leading-8
          ">
            Todos os nossos layouts são desenvolvidos para transmitir autoridade,
            confiança e profissionalismo desde o primeiro acesso.
          </p>

        </div>


        <div className="
        grid
        lg:grid-cols-3
        gap-10
        mt-20
        ">

          {projects.map((project) => (

            <div
              key={project.slug}
              className="
              overflow-hidden
              rounded-3xl
              bg-white
              border
              border-gray-200
              shadow-lg
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
              "
            >

              <div className="
              relative
              h-64
              overflow-hidden
              ">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full
                  h-full
                  object-cover
                  transition
                  duration-500
                  hover:scale-110
                  "
                />


                <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/10
                to-transparent
                "/>


              </div>


              <div className="p-8">

                <h3 className="
                text-3xl
                font-black
                ">
                  {project.title}
                </h3>


                <p className="
                text-yellow-600
                font-semibold
                mt-3
                ">
                  {project.area}
                </p>


                <p className="
                text-gray-600
                mt-6
                leading-8
                ">
                  {project.description}
                </p>


                <div className="
                flex
                gap-4
                mt-8
                flex-wrap
                ">


                  <Link
                    href={`/templates/${project.slug}`}
                    className="
                    inline-flex
                    items-center
                    gap-2
                    font-bold
                    text-black
                    hover:text-yellow-600
                    transition-all
                    "
                  >
                    Ver demonstração →
                  </Link>


                  <Link
                    href={`/orcamento?modelo=${project.slug}`}
                    className="
                    inline-flex
                    items-center
                    font-bold
                    bg-black
                    text-white
                    px-5
                    py-3
                    rounded-xl
                    hover:bg-yellow-500
                    hover:text-black
                    transition-all
                    "
                  >
                    Solicitar modelo
                  </Link>


                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}