import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn, constructMetadata } from "../lib/utils";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import {Analytics} from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });


export const metadata = constructMetadata();


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <Providers>
            <Navbar />
            <div flex-grow flex-1>
              {children}
              <Analytics/>

            </div>
            <Footer />
          </Providers>
          <Toaster position="top-center" richColors />
        </main>
      </body>
    </html>
  );
}
