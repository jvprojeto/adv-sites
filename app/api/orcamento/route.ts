import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(req: Request) {

  try {

    const body = await req.json();


    const cliente = await prisma.cliente.create({

      data: {

        nome: body.nome,
        whatsapp: body.whatsapp,
        email: body.email,
        cidade: body.cidade,
        slug: body.nome
          .toLowerCase()
          .replaceAll(" ", "-"),


      }

    });


    return NextResponse.json(cliente);


  } catch(error) {

    return NextResponse.json(
      {
        error:"Erro ao salvar orçamento"
      },
      {
        status:500
      }
    );

  }

}