"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";


function gerarSlug(nome:string){

  return nome
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g,"")
    .replace(/[^a-z0-9]+/g,"-")
    .replace(/(^-|-$)/g,"");

}



export async function criarSiteDemo(formData:FormData){


  const nome = formData.get("nome") as string;
  const cidade = formData.get("cidade") as string;
  const whatsapp = formData.get("whatsapp") as string;
  const especialidade = formData.get("especialidade") as string;



  const slugBase = gerarSlug(nome);



  const cliente = await prisma.cliente.create({

    data:{

      nome,

      slug: slugBase,

      cidade,

      whatsapp

    }

  });





  const site = await prisma.site.create({

    data:{

      clienteId: cliente.id,

      template:"premium",

      slogan:
      `${nome}: excelência jurídica em ${especialidade || "soluções jurídicas"}`,

      descricao:
      `Atendimento jurídico personalizado em ${especialidade || "diversas áreas do Direito"}.`,

      sobre:
      `O escritório ${nome} oferece atendimento profissional, estratégico e focado nos melhores resultados para seus clientes.`,

      valor:2500,

      manutencao:300,

      prazo:"7 dias"

    }

  });





  redirect(`/admin/sites/${site.id}`);


}