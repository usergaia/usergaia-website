import { Hero } from '@/components/LandingSection';
import { CLI } from '@/components/SummarySection';
import { S4 } from '@/components/Highlights';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PseudoFooter } from '@/components/PseudoFooter';

export default function Home() {
  return (
    <>
      <div className="hide-scrollbar h-screen overflow-x-hidden overflow-y-scroll bg-[#0a0a1a]">
        <Header />
        <Hero />
        <CLI />

        {/* <S4 /> */}
        <PseudoFooter />

        <Footer />
      </div>
    </>
  );
}
