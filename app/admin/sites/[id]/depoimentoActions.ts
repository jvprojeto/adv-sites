"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";


export async function criarDepoimento(
  siteId:string,
  formData:FormData
){


  const nome = formData.get("nome") as string;
  const texto = formData.get("texto") as string;



  if(!nome || !texto){
    return;
  }



  await prisma.depoimento.create({

    data:{
      nome,
      texto,
      siteId
    }

  });



  redirect(`/admin/sites/${siteId}`);

}





export async function removerDepoimento(
  id:string,
  siteId:string
){


  await prisma.depoimento.delete({

    where:{
      id
    }

  });



  redirect(`/admin/sites/${siteId}`);

}