import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kairoo Labs — AI & Software Development Studio",
  description:
    "Kairoo Labs builds digital products, AI systems, automation and launch experiences for ambitious businesses. Based in Dehradun, India.",
  keywords: [
    "AI development agency",
    "AI development company India",
    "software development agency India",
    "web development agency Dehradun",
    "AI automation agency",
    "AI agency India",
    "web app development",
    "AI product development",
  ],
  openGraph: {
    title: "Kairoo Labs — AI & Software Development Studio",
    description:
      "We build, ship & distribute what's next. AI & Software Development Studio based in Dehradun, India.",
    url: "https://kairoo.in",
    siteName: "Kairoo Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kairoo Labs — AI & Software Development Studio",
    description: "We build, ship & distribute what's next.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable} ${geistMono.variable}`}
    >
      <body className="bg-background text-foreground min-h-screen antialiased selection:bg-[#C8FF00] selection:text-[#080808]">
        <SmoothScrollProvider>
          <Navbar />
          <main className="relative z-10 bg-background">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
