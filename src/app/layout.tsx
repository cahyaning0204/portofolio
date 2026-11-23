import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "PORTOFOLIO | CAHYANING SESSA LESTARI",
  description: "Personal Portofolio of Cahyaning Sessa Lestari, showcasing my skills, projects, and achievements in web development and design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${fraunces.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="font-sans bg-[#F5EFE6] text-[#121212] antialiased">
        {children}
      </body>
    </html>
  );
}
