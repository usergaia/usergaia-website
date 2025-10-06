import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Milestone } from "./about.components/Milestones";
import { Hobby } from "./about.components/Hobby";
import { About } from "./about.components/About";
import { Awards } from "./about.components/Awards";
import { PseudoFooter } from "@/components/PseudoFooter";
import { Education } from "./about.components/Educ";

export default function AboutPage() {
  return (
    <div className="page">
      <Header />
      <main>
        <About />
        <Milestone />
        <Education />
        <Awards />
        <Hobby />
      </main>
      <PseudoFooter />
      <Footer />
    </div>
  );
}
