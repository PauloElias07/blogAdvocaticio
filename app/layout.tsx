import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Roberto Carlos Elias | Advogado — Direito do Consumidor",
  description:
    "Blog e atendimento jurídico especializado em Direito do Consumidor com o advogado Roberto Carlos Elias. Relação de consumo, contratos, produtos com vício e danos morais.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${body.variable} font-body bg-ink text-parchment`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
