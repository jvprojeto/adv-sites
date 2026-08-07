import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {

  try {

    const body = await req.json();

    console.log("BODY EDITAR SITE:", body);


    const {
      clienteId,
      template,
      slogan,
      descricao,
      sobre,
      nome,
      whatsapp,
      logo,
      imagemHero
    } = body;



    const cliente = await prisma.cliente.update({

      where:{
        id: clienteId
      },

      data:{
        nome,
        whatsapp,
        logo,
        imagemHero
      }

    });



    const site = await prisma.site.update({

      where:{
        clienteId
      },

      data:{
        template,
        slogan,
        descricao,
        sobre
      }

    });



    return NextResponse.json({

      sucesso:true,
      cliente,
      site

    });



  } catch(error){

    console.log(error);


    return NextResponse.json(

      {
        erro:"Erro ao editar site"
      },

      {
        status:500
      }

    );

  }

}