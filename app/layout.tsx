import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pavan Sai | Portfolio",
  description: "Frontend Developer | Next.js + TypeScript + Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
