import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faiz Firdaus",
  description: "Faiz Firdaus Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <head><meta name="google-site-verification" content="-h4ynCaHHpoWuOlLyDIhjqD7K8gARUoQe405WM7jxL0" /></head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className} id="top">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
