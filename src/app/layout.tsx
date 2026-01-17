import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer"; 

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aura Studio | Modelos Virtuales",
  description: "Agencia de modelos generadas por IA. Reducí costos de producción con talento virtual consistente.",
  icons: {
    icon: '/icon.png', // Busca el archivo icon.png en la carpeta public
    apple: '/icon.png', // Para iPhone/iPad
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Agregamos scroll-smooth para que la navegación sea elegante
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}