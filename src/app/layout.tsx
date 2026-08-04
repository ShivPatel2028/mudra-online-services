import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Mudra Online Services | CSC Service Center in Vadodara",
  description: "Mudra Online Services provides Aadhaar, PAN Card, Passport, Driving License, GST, Income Tax Filing, Insurance, Bill Payments, Certificates, Ayushman Card, eShram Card and many other government digital services in Vadodara.",
  keywords: ["CSC Vadodara", "CSC Center", "Aadhaar Update", "PAN Card", "Driving License", "Passport", "Income Tax Filing", "GST Registration", "Government Services", "Digital Services"],
  openGraph: {
    title: "Mudra Online Services | CSC Service Center",
    description: "Your One Stop Solution for Government & Digital Services in Vadodara.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudra Online Services",
    description: "Fast, Reliable, and Secure Government Services.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
