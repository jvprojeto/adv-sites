import { themes } from "@/themes";

type Props = {
  data:any;
};

export default function Navbar({data}:Props){


const template =
data?.site?.template || "premium";


const theme =
themes[
template as keyof typeof themes
]
||
themes.premium;



// WHATSAPP ADV SITES (DEMO)
const whatsapp =
process.env.NEXT_PUBLIC_WHATSAPP ||
"";


const links = [

{
name:"Serviços",
href:"#servicos"
},

{
name:"Portfólio",
href:"#portfolio"
},

{
name:"Processo",
href:"#processo"
},

{
name:"Contato",
href:"#contato"
}

];



return (

<nav

className="
absolute
top-0
w-full
z-50
py-6
"

>


<div

className="
max-w-7xl
mx-auto
px-6
"

>


<div

className="
flex
items-center
justify-between
rounded-2xl
px-6
py-4
backdrop-blur-xl
bg-white/10
border
border-white/20
"

>



{/* LOGO */}

<div>

<h2

className="
text-2xl
font-black
text-white
"

>

ADV Sites

</h2>


<p

className="
text-xs
uppercase
tracking-[4px]
text-white/70
mt-1
"

>

Sites jurídicos

</p>


</div>






{/* MENU */}

<div

className="
hidden
md:flex
gap-8
items-center
"

>


{

links.map((link:any)=>(


<a

key={link.href}

href={link.href}

className="
font-semibold
text-white
hover:text-yellow-400
transition
"

>

{link.name}

</a>


))

}



</div>





{/* CTA */}


<a


href={
whatsapp
?
`https://wa.me/${whatsapp}`
:
"#"
}


target="_blank"


className="

bg-yellow-500

text-black

px-7

py-3

rounded-full

font-black

shadow-lg

hover:scale-105

transition

"

>


Solicitar orçamento


</a>




</div>


</div>


</nav>


);


}