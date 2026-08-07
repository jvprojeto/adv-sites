import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(
request: Request,
{ params }: { params: Promise<{ id:string }> }
){

const {id}=await params;


const lead = await prisma.lead.findUnique({

where:{
id
}

});


if(!lead){

return NextResponse.json(
{
erro:"Lead não encontrado"
},
{
status:404
}
);

}



const slugBase =
(lead.escritorio || lead.nome)
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"")
.replace(/[^a-z0-9]+/g,"-")
.replace(/^-+|-+$/g,"");



const cliente = await prisma.cliente.create({

data:{

nome:
lead.escritorio || lead.nome,

slug:
slugBase,

whatsapp:
lead.whatsapp,

email:
lead.email

}

});




// cria site automaticamente

const site = await prisma.site.create({

data:{

clienteId:cliente.id,

template:"premium",

slogan:"",

descricao:"",

sobre:""

}

});




// atualiza lead

await prisma.lead.update({

where:{
id
},

data:{

status:"Convertido"

}

});




return NextResponse.json({

cliente,

site

});


}