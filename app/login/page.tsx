"use client";

import { useState } from "react";


export default function Login(){

const [senha,setSenha] = useState("");



async function entrar(){

const resposta = await fetch(
"/api/login",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
senha
})
}
);



if(resposta.ok){

window.location.href="/admin/clientes";

}else{

alert("Senha incorreta");

}

}



return (

<main className="
min-h-screen
flex
items-center
justify-center
bg-gray-50
">


<div className="
bg-white
p-10
rounded-3xl
shadow-xl
w-full
max-w-md
">


<h1 className="
text-3xl
font-black
mb-8
">

ADV Sites Admin

</h1>



<input

type="password"

placeholder="Senha do painel"

value={senha}

onChange={
e=>setSenha(e.target.value)
}

className="
w-full
p-4
bg-gray-100
rounded-xl
mb-5
"

/>



<button

onClick={entrar}

className="
w-full
bg-black
text-white
p-4
rounded-xl
font-bold
"

>

Entrar

</button>


</div>


</main>

)

}