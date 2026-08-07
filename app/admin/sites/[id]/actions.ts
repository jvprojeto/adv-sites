"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";


export async function atualizarSite(
  id:string,
  formData:FormData
){


  const template = formData.get("template") as string;
  const slogan = formData.get("slogan") as string;
  const descricao = formData.get("descricao") as string;
  const sobre = formData.get("sobre") as string;

  const valor = Number(formData.get("valor"));

  const manutencao = Number(formData.get("manutencao"));

  const prazo = formData.get("prazo") as string;



  await prisma.site.update({

    where:{
      id
    },

    data:{

      template,
      slogan,
      descricao,
      sobre,
      valor,
      manutencao,
      prazo

    }

  });


  redirect(`/admin/sites/${id}`);

}