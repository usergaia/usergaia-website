'use client';
import { useState } from 'react';

export function useDropDown() {
  const [open, setOpen] = useState(false);

  return { open, setOpen };
}
