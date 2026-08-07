export default function Benefits() {
  const benefits = [
    {
      number: "01",
      title: "Mais autoridade",
      text: "Seu escritório transmite credibilidade antes mesmo do primeiro contato."
    },
    {
      number: "02",
      title: "Mais clientes",
      text: "Transformamos visitantes em oportunidades reais de negócio."
    },
    {
      number: "03",
      title: "Mais resultado",
      text: "Sites rápidos, modernos e desenvolvidos exclusivamente para advocacia."
    }
  ];

  return (
    <section className="py-28 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">

          <p className="uppercase tracking-[6px] text-yellow-500 font-bold">
            Diferenciais
          </p>

          <h2 className="text-5xl font-black mt-4">
            Muito mais do que um site.
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {benefits.map((item) => (

            <div
              key={item.number}
              className="border border-zinc-800 rounded-3xl p-10 hover:border-yellow-500 transition"
            >

              <span className="text-yellow-500 text-5xl font-black">
                {item.number}
              </span>

              <h3 className="text-3xl font-bold mt-8">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-5 leading-8">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}