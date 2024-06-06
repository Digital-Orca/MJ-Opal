import type { Metadata } from "next";
import { Abril_Fatface } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientProvider from "@/providers/ClientProvider";
import MobileHeader from "@/components/MobileHeader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "MJ Opal",
  description:
    "MJ Opal - Stay tuned Opals! It is going to be a luxurious store",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={abril.className}>
        <ClientProvider>
          <Analytics />
          <SpeedInsights />
          <Header />
          <MobileHeader />
          <Toaster position="bottom-right" />
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
