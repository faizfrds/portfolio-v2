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
      <head>
        <meta
          name="google-site-verification"
          content="-h4ynCaHHpoWuOlLyDIhjqD7K8gARUoQe405WM7jxL0"
        />
        <meta
          name="description"
          content="Faiz Firdaus Portfolio. Computer science student at UMass Amherst. Here are a list of my projects and experiences."
        />
        <meta />
        <meta name="keywords" content="Faiz, Firdaus, Faiz Firdaus, Computer science, Software engineer, Research, Backend, Frontend, Internship, Intern, Student, Indonesia, United States, UMass Amherst, Massachusetts, Technology, Engineer, Design, CSS, React, Bpf, eBPF, Linux"></meta>
      </head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className} id="top">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
