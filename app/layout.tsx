import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {

  metadataBase: new URL(
  process.env.NEXT_PUBLIC_URL || "http://localhost:3000"
),

  title: "ADV Sites | Presença digital premium para escritórios de advocacia",

  description:
    "Criamos sites profissionais para escritórios de advocacia, focados em autoridade, confiança e geração de novos clientes.",


  keywords: [
    "site para advogado",
    "site para escritório de advocacia",
    "criação de sites jurídicos",
    "marketing jurídico",
    "ADV Sites"
  ],


  openGraph: {

    title:
      "ADV Sites | Sites profissionais para advocacia",

    description:
      "Sites modernos para escritórios de advocacia que querem transmitir autoridade e conquistar novos clientes.",

    type: "website",

    locale: "pt_BR",

    siteName: "ADV Sites",

    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "ADV Sites",
      },
    ],

  },


  twitter: {

    card: "summary_large_image",

    title:
      "ADV Sites | Sites profissionais para advocacia",

    description:
      "Criamos sites premium para escritórios de advocacia.",

    images: [
      "/logo.jpg",
    ],

  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="pt-BR">

      <body className={inter.className}>

        {children}

      </body>

    </html>

  );

}