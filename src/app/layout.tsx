import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

import SmoothScroller from "@/components/wrappers/SmoothScroller";
import PageTransition from "@/components/wrappers/PageTransition";
import Cursor from "@/components/ui/Cursor";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Nature Nest Wellness | Premium Spa",
  description: "Experience true relaxation at Nature Nest Wellness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-eucalyptus-200 selection:text-olive-900">
        <Loader />
        <Cursor />
        <SmoothScroller>
          <Navbar />
          <PageTransition>
            <main className="flex-1 flex flex-col">{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}

