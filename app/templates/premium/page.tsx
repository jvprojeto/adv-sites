"use client";

const whatsapp =
  "https://wa.me/5511948156665?text=Olá%2C%20gostei%20do%20modelo%20Empresarial%20da%20ADV%20Sites%20e%20quero%20saber%20mais.";

export default function EmpresarialDemo() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="uppercase tracking-[5px] text-yellow-600 font-bold">
              Advocacia Empresarial
            </p>

            <h1 className="text-7xl font-black mt-6">
              Almeida
              <br />
              Advocacia
            </h1>

            <h2 className="text-3xl mt-8 font-bold">
              Competência e autoridade no mercado empresarial.
            </h2>

            <p className="text-gray-600 text-xl mt-6">
              Assessoria jurídica estratégica para empresas que precisam
              tomar decisões importantes com segurança.
            </p>

            <div className="flex gap-4 flex-wrap mt-10">

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-5 rounded-xl font-bold hover:bg-yellow-500 hover:text-black transition"
              >
                Solicitar reunião
              </a>

              <a
                href="/orcamento?modelo=empresarial"
                className="border border-gray-300 px-8 py-5 rounded-xl font-bold hover:bg-gray-100 transition"
              >
                Quero este modelo
              </a>

            </div>

          </div>

          <div className="h-[600px] rounded-3xl overflow-hidden shadow-2xl">

            <img
              src="/images/empresarial.jpg"
              alt="Modelo Empresarial ADV Sites"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </section>

      <div className="fixed bottom-6 left-6">

        <a
          href="/"
          className="bg-black text-white px-6 py-3 rounded-xl font-bold shadow-xl hover:bg-yellow-500 hover:text-black transition"
        >
          ← Voltar para ADV Sites
        </a>

      </div>

    </main>
  );
}