import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";


export async function POST(
req:Request
){

try{


const formData = await req.formData();


const file = formData.get("file") as File;



if(!file){

return NextResponse.json(
{
erro:"Arquivo não enviado"
},
{
status:400
}
);

}



const bytes = await file.arrayBuffer();

const buffer = Buffer.from(bytes);



const nome = Date.now() + "-" + file.name;



const caminho = path.join(
process.cwd(),
"public/uploads",
nome
);



await fs.writeFile(
caminho,
buffer
);



return NextResponse.json({

url:`/uploads/${nome}`

});



}catch(error){


return NextResponse.json(
{
erro:"Erro upload"
},
{
status:500
}
);


}


}