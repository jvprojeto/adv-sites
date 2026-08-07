import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {


  const body = await req.json();


  const {
    siteId,
    pergunta,
    resposta
  } = body;



  const faq = await prisma.fAQ.create({

    data:{

      siteId,

      pergunta,

      resposta

    }

  });



  return NextResponse.json(faq);


}