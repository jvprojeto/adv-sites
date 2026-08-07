import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req:Request){

const body = await req.json();


await prisma.site.update({

where:{
id:body.siteId
},

data:{
template:body.template
}

});


return NextResponse.json({
ok:true
});

}