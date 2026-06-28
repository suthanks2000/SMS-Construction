import type { Metadata } from "next";
import { Manrope, Hanken_Grotesk } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMS Construction | Luxury Builders & Premium Interiors",
  description: "Exquisite high-end residential and commercial builds, bespoke interiors, 3D visualizations, and comprehensive engineering services by SMS Construction.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable} ${hankenGrotesk.variable}`}>
      <body className="antialiased relative">
        {children}

        {/* Floating WhatsApp Widget */}
        <a
          href="https://wa.me/919443200000"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#080C14] shadow-2xl hover:bg-[#FBBF24] hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Chat on WhatsApp"
        >
          {/* Ripple Pulse effect */}
          <span className="absolute inset-0 rounded-full bg-[#D4AF37]/40 animate-ping pointer-events-none group-hover:hidden" />

          <FaWhatsapp size={22} />
        </a>
      </body>
    </html>
  );
}
