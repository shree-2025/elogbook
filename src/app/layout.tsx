import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";
import DemoModal from "../components/DemoModal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "eLogbook | Digital Learning & Training",
  description:
    "eLogbook is a modern platform for medical colleges and students to track learning, monitor progress, and standardize training.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "eLogbook",
    description:
      "Digital Learning & Training for Medical Students — Paperless records, assessments, analytics.",
    url: "https://elogbook.example.com",
    siteName: "eLogbook",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "eLogbook",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${montserrat.variable} antialiased min-h-screen bg-white text-slate-900`}
      >
        <Navbar />
        <DemoModal />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
