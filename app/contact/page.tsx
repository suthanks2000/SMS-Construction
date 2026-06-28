'use client';

import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
