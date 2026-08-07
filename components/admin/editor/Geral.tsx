"use client";


export default function Geral({dados, alterar}:any){


return (

<div className="space-y-6">


<div>

<label className="block font-bold mb-2">
Nome do escritório
</label>

<input

value={dados.nome}

onChange={(e)=>alterar("nome",e.target.value)}

className="
w-full
border
rounded-xl
p-4
"

/>

</div>




<div>

<label className="block font-bold mb-2">
WhatsApp
</label>

<input

value={dados.whatsapp}

onChange={(e)=>alterar("whatsapp",e.target.value)}

className="
w-full
border
rounded-xl
p-4
"

/>

</div>




<div>

<label className="block font-bold mb-2">
Slogan
</label>

<input

value={dados.slogan}

onChange={(e)=>alterar("slogan",e.target.value)}

className="
w-full
border
rounded-xl
p-4
"

/>

</div>




<div>

<label className="block font-bold mb-2">
Descrição
</label>


<textarea

value={dados.descricao}

onChange={(e)=>alterar("descricao",e.target.value)}

className="
w-full
border
rounded-xl
p-4
h-32
"

/>


</div>




<div>

<label className="block font-bold mb-2">
Sobre o escritório
</label>


<textarea

value={dados.sobre}

onChange={(e)=>alterar("sobre",e.target.value)}

className="
w-full
border
rounded-xl
p-4
h-40
"

/>


</div>



</div>

)

}