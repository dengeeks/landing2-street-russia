import "@/shared/styles/globals.css";
import type {ReactNode} from "react";
import Header from "@/widgets/header";
import Footer from "@/widgets/footer";
import {Bahnschrift, Benzin} from "@/shared/styles/fonts";
import { PUBLIC_API_BASE_URL } from '@/shared/settings'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_API_BASE_URL),
  openGraph: {
    url: '/',
    type: 'website',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ru'
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="ru">
    <body className={`${Bahnschrift.variable} ${Benzin.variable}`}>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
