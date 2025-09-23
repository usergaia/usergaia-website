import { S1 } from '@/components/LandingSection';
import { S2 } from '@/components/SummarySection';
import { S4 } from '@/components/Highlights';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className="hide-scrollbar h-screen overflow-x-hidden overflow-y-scroll bg-[#0a0a1a]">
        <Header />
        <S1 />
        <S2 />
        {/* <S4 /> */}
        <Footer />
      </div>
    </>
  );
}
