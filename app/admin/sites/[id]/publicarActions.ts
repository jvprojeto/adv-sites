"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";


export async function publicarSite(id:string){


  await prisma.site.update({

    where:{
      id
    },

    data:{
      publicado:true
    }

  });


  redirect(`/admin/sites/${id}`);

}




export async function despublicarSite(id:string){


  await prisma.site.update({

    where:{
      id
    },

    data:{
      publicado:false
    }

  });


  redirect(`/admin/sites/${id}`);

}