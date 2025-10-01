import { S1 } from '@/components/LandingSection';
import { S2 } from '@/components/SummarySection';
// import { S4 } from '@/components/Highlights';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className="hide-scrollbar h-screen overflow-x-hidden overflow-y-scroll bg-[#0a0a1a]">
        <Header />
        <S1 />
        <S2 />

        <div className="flex w-full flex-col items-center justify-center border-t border-violet-800/50 bg-[#121228] p-8 text-center text-white">
          <h1 className="mr-2 mb-4 text-left text-7xl font-bold">
            <span className="section-title-span">Shall we?</span>
          </h1>

          <p className="section-desc text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            temporibus in quidem ipsam.
          </p>

          <button className="button h-12 w-60">Email Me</button>
        </div>
        {/* <S4/> */}

        <Footer />
      </div>
    </>
  );
}
