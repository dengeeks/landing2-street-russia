import "@/shared/styles/globals.css";
import {ReactNode} from "react";
import Header from "@/widgets/header";
import Footer from "@/widgets/footer";
import {Bahnschrift, Benzin, Inter} from "@/shared/styles/fonts";
import ModalManager from "@/widgets/modal-manager";

export default async function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="en">
    <body className={`${Bahnschrift.variable} ${Inter.variable} ${Benzin.variable}`}>
      <Header/>
      <ModalManager />
        {children}
      <Footer/>
      </body>
    </html>
  );
}
