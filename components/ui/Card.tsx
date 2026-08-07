type Props = {
 children: React.ReactNode;
};


export default function Card({children}:Props){

return (

<div

className="
bg-white
rounded-3xl
border
shadow-sm
p-8
"

>

{children}

</div>

);

}