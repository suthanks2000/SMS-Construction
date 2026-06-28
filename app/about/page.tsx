'use client';

import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
}
