import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req:Request){


try{


const {siteId} = await req.json();



const site = await prisma.site.update({

where:{
id:siteId
},

data:{

publicado:true

}

});



return NextResponse.json(site);



}catch(error){


console.log(error);


return NextResponse.json(

{
erro:"Erro ao publicar"
},

{
status:500
}

);


}


}