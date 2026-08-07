import { NextResponse } from "next/server";

export async function POST(req: Request){

  const { senha } = await req.json();


  if(senha === process.env.ADMIN_PASSWORD){

    const resposta = NextResponse.json({
      ok:true
    });


    resposta.cookies.set(
      "admin_auth",
      "true",
      {
        httpOnly:true,
        path:"/"
      }
    );


    return resposta;

  }


  return NextResponse.json(
    {
      erro:"Senha incorreta"
    },
    {
      status:401
    }
  );

}