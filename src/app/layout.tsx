import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arman Soleimany | Front-End Developer",
    template: "%s | Arman Soleimany",
  },
  description:
    "Professional front-end developer specializing in React, Next.js, and TypeScript. Available for freelance projects.",
  keywords: [
    "web developer",
    "front-end developer",
    "freelance",
    "React",
    "Next.js",
    "TypeScript",
    "Arman Soleimany",
  ],
  authors: [
    { name: "Arman Soleimany", url: "https://github.com/Arman-Soleimany" },
  ],
  creator: "Arman Soleimany",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://armansoleimany.dev",
    siteName: "Arman Soleimany",
    title: "Arman Soleimany | Front-End Developer",
    description:
      "Professional front-end developer specializing in React, Next.js, and TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arman Soleimany | Front-End Developer",
    description:
      "Professional front-end developer specializing in React, Next.js, and TypeScript.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
