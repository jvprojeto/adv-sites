"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";


export async function criarArea(
  siteId:string,
  formData:FormData
){


  const titulo = formData.get("titulo") as string;



  if(!titulo){
    return;
  }



  await prisma.area.create({

    data:{
      titulo,
      siteId
    }

  });



  redirect(`/admin/sites/${siteId}`);

}




export async function removerArea(
  id:string,
  siteId:string
){


  await prisma.area.delete({

    where:{
      id
    }

  });



  redirect(`/admin/sites/${siteId}`);

}