"use client";

const whatsapp =
  "https://wa.me/5511948156665?text=Olá%2C%20gostei%20do%20modelo%20Tribunal%20da%20ADV%20Sites%20e%20quero%20saber%20mais.";

export default function TribunalDemo() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="uppercase tracking-[5px] text-yellow-500 font-bold">
              Advocacia Institucional
            </p>

            <h1 className="text-7xl font-black mt-6">
              Ferreira
              <br />
              Advocacia
            </h1>

            <h2 className="text-3xl mt-8 font-bold">
              Tradição. Autoridade. Confiança.
            </h2>

            <p className="text-gray-300 text-xl mt-6">
              Um posicionamento institucional para escritórios que valorizam
              experiência e credibilidade.
            </p>

            <div className="flex gap-4 flex-wrap mt-10">

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-black px-8 py-5 rounded-xl font-bold hover:bg-yellow-400 transition"
              >
                Agendar consulta
              </a>

              <a
                href="/orcamento?modelo=tribunal"
                className="border border-gray-600 px-8 py-5 rounded-xl font-bold hover:bg-white hover:text-black transition"
              >
                Quero este modelo
              </a>

            </div>

          </div>

          <div className="h-[600px] rounded-3xl overflow-hidden shadow-2xl">

            <img
              src="/images/tribunal.jpg"
              alt="Modelo Tribunal ADV Sites"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </section>

      <div className="fixed bottom-6 left-6">

        <a
          href="/"
          className="bg-white text-black px-6 py-3 rounded-xl font-bold shadow-xl hover:bg-yellow-500 hover:text-black transition"
        >
          ← Voltar para ADV Sites
        </a>

      </div>

    </main>
  );
}