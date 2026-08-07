import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req:Request){


try{


const body = await req.json();


const {
clienteId,
template
}=body;



await prisma.site.update({

where:{
clienteId
},

data:{
template
}

});



return NextResponse.json({

sucesso:true

});



}catch(error){


console.log(error);


return NextResponse.json({

erro:true

},{
status:500
});


}


}