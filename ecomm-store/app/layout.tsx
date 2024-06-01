import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import  Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/navbar";

const font = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
