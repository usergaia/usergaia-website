import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Education } from "./about.components/Education";
import { Hobby } from "./about.components/Hobby";
import { About } from "./about.components/About";
import { Awards } from "./about.components/Awards";
import { PseudoFooter } from "@/components/PseudoFooter";

export default function AboutPage() {
  return (
    <div className="page">
      <Header />
      <main>
        <About />
        <Education />
        <Awards />
        <Hobby />
      </main>
      <PseudoFooter />
      <Footer />
    </div>
  );
}
