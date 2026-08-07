"use client";


console.log("ENTROU NO CONTEUDO");


export default function Conteudo({dados, alterar}:any){


return (

<div className="space-y-6">


<div>

<label className="block font-bold mb-2">
Slogan do site
</label>


<input

value={dados.slogan || ""}

onChange={(e)=>alterar("slogan",e.target.value)}

placeholder="Ex: Advocacia estratégica para grandes negócios"

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

rows={5}

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
Sobre o escritório
</label>


<textarea

value={dados.sobre}

onChange={(e)=>alterar("sobre",e.target.value)}

rows={5}

className="
w-full
border
rounded-xl
p-4
"

/>


</div>


</div>

)

}