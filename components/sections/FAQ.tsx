const faqs = [
  {
    pergunta: "Em quanto tempo meu site fica pronto?",
    resposta:
      "Normalmente entregamos o site entre 5 e 10 dias úteis, dependendo da quantidade de conteúdo e da velocidade na aprovação."
  },
  {
    pergunta: "Vocês fazem alterações depois da entrega?",
    resposta:
      "Sim. Oferecemos suporte e planos de manutenção para manter seu site atualizado e funcionando perfeitamente."
  },
  {
    pergunta: "Preciso fornecer todo o conteúdo?",
    resposta:
      "Não necessariamente. Podemos orientar você ou produzir a estrutura inicial para acelerar a publicação."
  },
  {
    pergunta: "O site funciona no celular?",
    resposta:
      "Sim. Todos os nossos sites são totalmente responsivos e funcionam perfeitamente em celulares, tablets e computadores."
  },
  {
    pergunta: "Meu escritório já possui um site. Posso trocar?",
    resposta:
      "Sim. Podemos modernizar seu site atual ou desenvolver um completamente novo sem perder sua identidade."
  },
  {
    pergunta: "Como funciona o pagamento?",
    resposta:
      "Trabalhamos com pagamento facilitado e apresentamos todos os valores antes do início do projeto, sem cobranças ocultas."
  }
];


export default function FAQ(){

  return (

    <section
    className="
    py-24
    bg-gray-50
    "
    >

      <div className="
      max-w-5xl
      mx-auto
      px-6
      ">


        <h2 className="
        text-4xl
        font-black
        text-center
        "
        >
          Perguntas frequentes
        </h2>


        <div className="
        mt-12
        grid
        gap-6
        "
        >

          {
          faqs.map((item,index)=>(

            <div
            key={index}
            className="
            bg-white
            rounded-2xl
            p-6
            shadow
            "
            >

              <h3 className="
              font-bold
              text-xl
              "
              >
                {item.pergunta}
              </h3>


              <p className="
              mt-3
              text-gray-600
              "
              >
                {item.resposta}
              </p>


            </div>

          ))
          }

        </div>


      </div>


    </section>

  );

}