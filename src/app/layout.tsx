import "./globals.css";
import type { Metadata } from "next";
import PersistentBanner from "@/app/components/PersistentBanner"; // ajuste o caminho conforme necessário

export const metadata: Metadata = {
  title: "Plataforma de Roteiros",
  description: "Descubra circuitos, tours e grupos incríveis pela América Latina.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="pt-28"> {/* padding para não sobrepor o banner fixo */}
        <PersistentBanner />
        {children}
      </body>
    </html>
  );
}
