import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(request: Request) {

  try {

    const body = await request.json();


    const lead = await prisma.lead.create({

      data: {

        nome: body.nome,

        whatsapp: body.whatsapp,

        email: body.email,

        escritorio: body.escritorio,

        tipoSite: body.tipoSite,

        mensagem: body.mensagem

      }

    });


    return NextResponse.json({
      sucesso:true,
      lead
    });


  } catch(error) {

    console.log("ERRO LEAD:", error);


    return NextResponse.json(
      {
        erro:"Erro ao salvar lead"
      },
      {
        status:500
      }
    );

  }

}