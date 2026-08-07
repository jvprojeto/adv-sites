import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {

  try {


    const body = await req.json();


    const {
      clienteId
    } = body;



    const cliente = await prisma.cliente.findUnique({

      where:{
        id:clienteId
      }

    });



    if(!cliente){

      return NextResponse.json(
        {
          erro:"Cliente não encontrado"
        },
        {
          status:404
        }
      );

    }



    const site = await prisma.site.upsert({

      where:{
        clienteId
      },

      update:{},

      create:{

        clienteId,

        template:"premium",

        slogan:
        "Soluções jurídicas com estratégia e segurança.",

        descricao:
        "Escritório especializado em oferecer atendimento jurídico personalizado e eficiente.",

        sobre:
        "Nossa missão é oferecer soluções jurídicas com proximidade, confiança e excelência."

      }

    });



    const areas = await prisma.area.count({

      where:{
        siteId:site.id
      }

    });



    if(areas === 0){

      await prisma.area.createMany({

        data:[

          {
            siteId:site.id,
            titulo:"Direito Empresarial"
          },

          {
            siteId:site.id,
            titulo:"Direito Civil"
          },

          {
            siteId:site.id,
            titulo:"Contratos"
          },

          {
            siteId:site.id,
            titulo:"Consultoria Jurídica"
          }

        ]

      });

    }



    const faqs = await prisma.fAQ.count({

      where:{
        siteId:site.id
      }

    });



    if(faqs === 0){

      await prisma.fAQ.createMany({

        data:[

          {
            siteId:site.id,
            pergunta:"Como funciona o atendimento?",
            resposta:"Entre em contato para uma avaliação inicial do seu caso."
          },

          {
            siteId:site.id,
            pergunta:"Quais áreas o escritório atende?",
            resposta:"Atuamos em diversas áreas jurídicas."
          },

          {
            siteId:site.id,
            pergunta:"Como contratar?",
            resposta:"Fale conosco pelo WhatsApp."
          }

        ]

      });

    }



    const depoimentos = await prisma.depoimento.count({

      where:{
        siteId:site.id
      }

    });



    if(depoimentos === 0){

      await prisma.depoimento.createMany({

        data:[

          {
            siteId:site.id,
            nome:"Cliente satisfeito",
            texto:"Excelente atendimento e suporte durante todo o processo."
          },

          {
            siteId:site.id,
            nome:"Cliente satisfeito",
            texto:"Equipe profissional e comprometida."
          }

        ]

      });

    }



    return NextResponse.json({

  sucesso:true,
  siteId: site.id

});



  } catch(error) {


    console.log(error);


    return NextResponse.json({

      erro:true

    },{

      status:500

    });


  }

}