"use client";

import { useState } from "react";

const whatsappUrl =
"https://wa.me/5511948156665?text=Ol%C3%A1%2C%20conheci%20a%20ADV%20Sites%20e%20gostaria%20de%20criar%20um%20site%20para%20meu%20escrit%C3%B3rio.";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

return ( <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-200"> <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">


    {/* LOGO */}
    <a
      href="/"
      className="text-3xl font-black tracking-tight"
      onClick={() => setMenuOpen(false)}
    >
      ADV <span className="text-yellow-500">Sites</span>
    </a>

    {/* MENU DESKTOP */}
    <div className="hidden md:flex gap-8 items-center">

      <a
        href="/#processo"
        className="text-gray-700 font-medium hover:text-black transition"
      >
        Processo
      </a>

      <a
        href="/#servicos"
        className="text-gray-700 font-medium hover:text-black transition"
      >
        Serviços
      </a>

      <a
        href="/#portfolio"
        className="text-gray-700 font-medium hover:text-black transition"
      >
        Portfólio
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-500 hover:text-black transition"
      >
        Quero meu site
      </a>

    </div>

    {/* BOTÃO MOBILE */}
    <button
      type="button"
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-3xl font-bold"
      aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={menuOpen}
    >
      {menuOpen ? "✕" : "☰"}
    </button>

  </div>

  {/* MENU MOBILE */}
  {menuOpen && (
    <div className="md:hidden border-t border-gray-200 bg-white px-6 py-6">

      <div className="flex flex-col gap-5">

        <a
          href="/#processo"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-semibold text-gray-700 hover:text-black transition"
        >
          Processo
        </a>

        <a
          href="/#servicos"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-semibold text-gray-700 hover:text-black transition"
        >
          Serviços
        </a>

        <a
          href="/#portfolio"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-semibold text-gray-700 hover:text-black transition"
        >
          Portfólio
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="bg-black text-white px-6 py-4 rounded-xl font-bold text-center hover:bg-yellow-500 hover:text-black transition"
        >
          Quero meu site
        </a>

      </div>

    </div>
  )}

</nav>


);
}
