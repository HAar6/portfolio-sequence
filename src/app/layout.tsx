import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SpiralBackground from "@/components/SpiralBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harshit's Portfolio",
  description: "A high-end scrollytelling personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-transparent text-white">
        <SpiralBackground />
        <Navbar />
        <div className="flex-1 relative z-10">
          {children}
        </div>
        <footer className="w-full py-8 text-center text-neutral-500 text-sm border-t border-white/5 bg-[#121212] relative z-50">
          <p>© {new Date().getFullYear()} By Harshit</p>
        </footer>
      </body>
    </html>
  );
}
