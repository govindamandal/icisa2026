import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "ICISA 2026",
  description: "1st International Conference on Intelligent System, and Applications ICISA 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
