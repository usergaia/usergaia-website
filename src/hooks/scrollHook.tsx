'use client';
import { useScroll, useTransform } from 'framer-motion';

export function useFadeScroll() {
  const { scrollY } = useScroll(); // watch the page scroll
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return { y, opacity };
}
