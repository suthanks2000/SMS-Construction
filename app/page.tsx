import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import FloorPlans from "./components/FloorPlans";
import Amenities from "./components/Amenities";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Portfolio />
        <FloorPlans />
        <Amenities />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
