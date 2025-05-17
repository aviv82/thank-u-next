import "@/styles/global.css";

import { Dosis } from "next/font/google";

import { Footer } from "@/components/footer/Footer";
import { NavBar } from "@/components/navBar/NavBar";

const dosis = Dosis({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dosis.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>thank u next</title>
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
