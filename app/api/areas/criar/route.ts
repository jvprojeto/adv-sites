import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {


  const body = await req.json();


  const {
    siteId,
    titulo
  } = body;



  const area = await prisma.area.create({

    data:{

      siteId,

      titulo

    }

  });



  return NextResponse.json(area);

}