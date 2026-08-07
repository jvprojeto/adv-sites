import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";


const adapter = new PrismaBetterSqlite3({
  url: "file:./dev.db",
});


const prisma = new PrismaClient({
  adapter,
});


async function main() {


  // limpa dados antigos

  await prisma.depoimento.deleteMany();

  await prisma.fAQ.deleteMany();

  await prisma.area.deleteMany();

  await prisma.site.deleteMany();

  await prisma.cliente.deleteMany();



  const cliente = await prisma.cliente.create({

    data: {

      nome: "Escritório João Victor",

      slug: "joao-victor",

      email: "contato@joaovictor.com",

      whatsapp: "5511999999999",

      telefone: "11999999999",

      cidade: "São Paulo",

      logo: "JV Advocacia",



      site: {

        create: {


          template: "premium",


          slogan:
            "Advocacia estratégica para grandes decisões",


          descricao:
            "Soluções jurídicas modernas, personalizadas e eficientes.",


          sobre:
            "O Escritório João Victor atua com foco em excelência jurídica, estratégia e resultados.",


          publicado: true,



          areas: {

            create: [

              {
                titulo: "Direito Empresarial"
              },

              {
                titulo: "Direito Civil"
              },

              {
                titulo: "Contratos"
              },

              {
                titulo: "Consultoria Jurídica"
              }

            ]

          },



          faqs: {

            create: [

              {
                pergunta:
                  "Como funciona o atendimento?",

                resposta:
                  "O atendimento é personalizado conforme a necessidade de cada cliente."
              },


              {
                pergunta:
                  "Quais áreas o escritório atende?",

                resposta:
                  "Atuação estratégica em diversas áreas jurídicas."
              }

            ]

          },



          depoimentos: {

            create: [

              {
                nome:
                  "Cliente Empresarial",

                texto:
                  "Excelente atendimento e muita segurança durante todo o processo."
              }

            ]

          }


        }

      }

    }

  });



  console.log("Cliente criado:", cliente.nome);

}



main()

.then(() => {

  console.log("Seed concluído!");

})


.catch((e) => {

  console.error(e);

})


.finally(async () => {

  await prisma.$disconnect();

});