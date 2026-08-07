export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Briefing",
      text: "Entendemos seu escritório, objetivos e o perfil dos clientes que você deseja atrair.",
    },
    {
      number: "02",
      title: "Design",
      text: "Criamos um layout exclusivo que transmite autoridade e gera confiança desde o primeiro acesso.",
    },
    {
      number: "03",
      title: "Desenvolvimento",
      text: "Construímos um site rápido, moderno e otimizado para celulares, tablets e computadores.",
    },
    {
      number: "04",
      title: "Publicação",
      text: "Após sua aprovação, colocamos o site no ar e deixamos tudo pronto para receber novos clientes.",
    },
  ];

  return (
    <section
      id="processo"
      className="py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-yellow-600 uppercase tracking-[6px] font-bold">
            Processo
          </p>

          <h2 className="text-5xl font-black mt-5">
            Como desenvolvemos seu site
          </h2>

          <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto leading-8">
            Um processo simples, transparente e estratégico para entregar um
            site profissional que fortalece a imagem do seu escritório.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

          {steps.map((step) => (

            <div
              key={step.number}
              className="
              bg-white
              rounded-3xl
              border
              border-gray-200
              p-10
              shadow-lg
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
              "
            >

              <span className="text-5xl font-black text-yellow-500">
                {step.number}
              </span>

              <h3 className="text-2xl font-bold mt-8">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-5 leading-8">
                {step.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}