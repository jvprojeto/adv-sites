import { NextResponse } from "next/server";

export async function POST(req:Request){

const body = await req.json();

const nome = body.nome || "Escritório";


return NextResponse.json({

template:"premium",

slogan:
`${nome}: excelência jurídica e soluções estratégicas`,


descricao:
"Atendimento jurídico personalizado com estratégia, segurança e compromisso com resultados.",


sobre:
"Nosso escritório atua oferecendo soluções jurídicas eficientes, buscando sempre a melhor estratégia para cada cliente.",


areas:[

{
titulo:"Direito Empresarial"
},

{
titulo:"Contratos"
},

{
titulo:"Consultoria Jurídica"
},

{
titulo:"Processos Judiciais"
}

],


faqs:[

{
pergunta:"Como funciona o atendimento?",
resposta:"Realizamos uma análise inicial para entender o caso e apresentar a melhor estratégia jurídica."
},

{
pergunta:"Como falar com o escritório?",
resposta:"Entre em contato pelo WhatsApp para solicitar uma avaliação inicial."
},

{
pergunta:"O atendimento é personalizado?",
resposta:"Sim. Cada caso recebe uma estratégia adequada às necessidades do cliente."
}

],


depoimentos:[

{
nome:"Atendimento jurídico",
texto:"Profissionais preparados, atendimento próximo e uma estratégia personalizada para cada situação."
},

{
nome:"Cliente empresarial",
texto:"Equipe comprometida, comunicação clara e excelente acompanhamento durante todo o processo."
}

]

});

}