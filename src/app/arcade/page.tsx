import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ArcadePage() {
  return (
    <div className="page min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="section-page">
          <h1 className="section-title-h1">
            <span className="section-title-span">Arcade</span>
          </h1>
          <p className="section-desc mt-6 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt
            repellendus culpa, officiis enim, ab accusamus quo doloremque amet
            facilis saepe deserunt maxime laboriosam, dolorum minima dolor eos
            cum vel.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
