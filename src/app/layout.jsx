import "@/styles/global.css";

import { Dosis } from "next/font/google";

import { Footer } from "@/components/footer/Footer";
import { NavBar } from "@/components/navBar/NavBar";

const dosis = Dosis({
  subsets: ["latin"],
});

export const metadata = {
  description: "A page about next.js",
  title: "thank u next",
};

export const link = {
  rel: "icon",
  href: "/favicon.ico",
  sizes: "any",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dosis.className}>
      <head />
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
