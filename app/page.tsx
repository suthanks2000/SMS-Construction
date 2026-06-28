'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
