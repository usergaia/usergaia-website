'use client';
import { useState } from 'react';
import { AwardProps, CertProps } from '@/types/component.types';

export function usePagination(
  groups: string[] | CertProps[][] | AwardProps[][]
) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');

  const goToGroup = (index: number) => {
    setCurrentIndex(index);
  };

  const nextGroup = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % groups.length);
  };

  const prevGroup = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + groups.length) % groups.length);
  };
  return {
    goToGroup,
    nextGroup,
    prevGroup,
    direction,
    currentIndex,
  };
}
