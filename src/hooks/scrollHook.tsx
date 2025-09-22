'use client';
import { useScroll, useTransform } from 'framer-motion';

export function useFadeScroll() {
  const { scrollY } = useScroll(); // watch the page scroll
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return { y, opacity };
}

// interface ScrollButtonProps {
//   targetId: string;
//   children: React.ReactNode;
// }

// export const ScrollButton: React.FC<ScrollButtonProps> = ({
//   targetId,
//   children,
// }) => {
//   const handleClick = () => {
//     const el = document.getElementById(targetId);
//     if (el) el.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className="text-sm text-gray-400 transition-colors duration-200 hover:text-fuchsia-400"
//     >
//       {children}
//     </button>
//   );
// };
