import { S1 } from '@/components/LandingSection';
import { S2 } from '@/components/SummarySection';
import { S4 } from '@/components/Highlights';
import { Header } from '@/components/Header';
// import clsx from 'clsx';
export default function Home() {
  return (
    <>
      <div className="hide-scrollbar h-screen snap-y snap-proximity overflow-x-hidden overflow-y-scroll lg:snap-mandatory">
        <Header />
        <S1 />
        <S2 />
        <S4 />
      </div>
    </>
  );
}
