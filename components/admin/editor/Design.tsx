"use client";


export default function Design({dados, alterar}:any){


return (

<div className="space-y-6">


<h3 className="text-xl font-bold">
Escolher modelo do site
</h3>


<select

value={dados.template}

onChange={(e)=>alterar("template", e.target.value)}

className="
w-full
border
rounded-xl
p-4
"

>


<option value="premium">
Premium
</option>


<option value="executivo">
Executivo
</option>


<option value="empresarial">
Empresarial
</option>


<option value="minimalista">
Minimalista
</option>


<option value="tribunal">
Tribunal
</option>


</select>


</div>

)

}