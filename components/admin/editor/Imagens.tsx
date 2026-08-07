"use client";

import { useState } from "react";
import { Button } from "@/components/ui";


type Props = {
  dados:any;
  alterar:(campo:string,valor:string)=>void;
};


export default function Imagens({
  dados,
  alterar
}:Props){


const [enviando,setEnviando] = useState(false);



async function upload(
e:React.ChangeEvent<HTMLInputElement>,
campo:string
){


const arquivo = e.target.files?.[0];


if(!arquivo) return;



setEnviando(true);



const formData = new FormData();


formData.append(
"file",
arquivo
);



const resposta = await fetch(
"/api/upload",
{
method:"POST",
body:formData
}
);



const resultado = await resposta.json();



if(resultado.url){

alterar(
campo,
resultado.url
);

}



setEnviando(false);


}




return (

<div className="space-y-8">


<h2 className="
text-2xl
font-bold
">
Imagens do site
</h2>



<div>


<label className="
font-bold
block
mb-3
">

Logo do escritório

</label>



<input

type="file"

accept="image/*"

onChange={(e)=>
upload(e,"logo")
}

/>



{
dados.logo &&

<img

src={dados.logo}

className="
mt-5
h-32
object-contain
border
rounded-xl
p-3
"

/>

}



</div>




<div>


<label className="
font-bold
block
mb-3
">

Imagem principal

</label>



<input

type="file"

accept="image/*"

onChange={(e)=>
upload(e,"imagemHero")
}

/>



{
dados.imagemHero &&

<img

src={dados.imagemHero}

className="
mt-5
w-full
h-48
object-cover
rounded-xl
"

/>

}



</div>



{
enviando &&

<p className="text-gray-500">

Enviando imagem...

</p>

}



</div>

);


}