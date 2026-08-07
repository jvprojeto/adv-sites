"use client";

import { contact } from "@/data/contact";

export default function Navbar(){

return(

<nav

className="
fixed
top-0
w-full
bg-white/90
backdrop-blur-xl
z-50
border-b
"

>


<div

className="
max-w-7xl
mx-auto
px-6
py-5
flex
justify-between
items-center
"

>



{/* LOGO */}

<a
href="#"
className="
text-3xl
font-black
tracking-tight
"
>

ADV
<span className="text-yellow-500">
Sites
</span>

</a>





{/* MENU */}

<div

className="
hidden
md:flex
gap-8
items-center
"

>


<a

href="#processo"

className="
text-gray-700
font-medium
hover:text-black
transition
"

>

Processo

</a>




<a

href="#servicos"

className="
text-gray-700
font-medium
hover:text-black
transition
"

>

Serviços

</a>





<a

href="#portfolio"

className="
text-gray-700
font-medium
hover:text-black
transition
"

>

Portfólio

</a>





<a

href={
`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`
}

target="_blank"

className="
bg-black
text-white
px-6
py-3
rounded-xl
"

>
Solicitar site

</a>



</div>





</div>


</nav>


)

}