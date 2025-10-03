'use client';

import { Header } from '@/components/Header';

import { Footer } from '@/components/Footer';
import { Contributor } from '@/app/projects/projects.components/Contributor';
import { Projects } from './projects.components/Projects';

export default function ProjectsPage() {
  return (
    <>
      <div className="page">
        <Header />
        <Projects />
        <Contributor />
      </div>
      <Footer />
    </>
  );
}
