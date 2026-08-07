import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Areas from "@/components/sections/Areas";
import About from "@/components/sections/About";
import Benefits from "@/components/sections/Benefits";
import Portfolio from "@/components/sections/Portfolio";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Orcamento from "@/components/sections/Orcamento";
import Trust from "@/components/sections/Trust";
import Transformation from "@/components/sections/Transformation";
import Plans from "@/components/sections/Plans";

import Footer from "@/components/layout/Footer";

export default function Home() {
return ( <main className="min-h-screen bg-white">


  <Navbar />

  <Hero />

  <div id="processo">
    <Process />
  </div>

  <div id="servicos">
    <Areas />
  </div>

  <About />

  <Benefits />

  <Trust />

  <Transformation />

  <Plans />

  <div id="portfolio">
    <Portfolio />
  </div>

  <FAQ />

  <div id="contato">
  <Orcamento />
</div>

  <CTA />

  <Footer />

</main>


);
}
