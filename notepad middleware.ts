import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest){

const autorizado =
request.cookies.get("admin_auth");


if(
request.nextUrl.pathname.startsWith("/admin")
&&
!autorizado
){

return NextResponse.redirect(
new URL("/login", request.url)
);

}


return NextResponse.next();

}



export const config = {

matcher:[
"/admin/:path*"
]

};