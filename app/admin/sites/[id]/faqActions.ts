"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";


export async function criarFAQ(
  siteId:string,
  formData:FormData
){


  const pergunta = formData.get("pergunta") as string;
  const resposta = formData.get("resposta") as string;



  if(!pergunta || !resposta){
    return;
  }



  await prisma.fAQ.create({

    data:{
      pergunta,
      resposta,
      siteId
    }

  });



  redirect(`/admin/sites/${siteId}`);

}





export async function removerFAQ(
  id:string,
  siteId:string
){


  await prisma.fAQ.delete({

    where:{
      id
    }

  });



  redirect(`/admin/sites/${siteId}`);

}