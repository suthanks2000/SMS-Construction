import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

import PageLoader from "./components/PageLoader";
import CustomCursor from "./components/CustomCursor";
import WhatsAppButton from "./components/WhatsAppButton";
import GoldParticleBackground from "./components/GoldParticleBackground";

export const metadata: Metadata = {
  title: "SMS Construction | Nagercoil, Kanyakumari, Tamil Nadu",
  description: "Exquisite luxury residences, premium apartments, and custom-designed villas by SMS Construction in Nagercoil & Kanyakumari, Tamil Nadu. Discover state-of-the-art living.",
  keywords: "SMS Construction, Luxury Real Estate Nagercoil, Villas in Kanyakumari, Premium Homes Tamil Nadu, Builders in Nagercoil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-luxury-bg text-luxury-text-primary selection:bg-luxury-gold/20 selection:text-luxury-text-primary">
        <LenisProvider>
          <PageLoader />
          <CustomCursor />
          <WhatsAppButton />
          <GoldParticleBackground />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

