'use client';

import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="pt-20">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
