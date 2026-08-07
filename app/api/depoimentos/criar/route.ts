import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {


  const body = await req.json();


  const {
    siteId,
    nome,
    texto
  } = body;



  const depoimento = await prisma.depoimento.create({

    data:{

      siteId,

      nome,

      texto

    }

  });



  return NextResponse.json(depoimento);

}