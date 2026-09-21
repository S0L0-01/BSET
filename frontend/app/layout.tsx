import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/ui/theme-provider"
import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BSET Berhampur | Official Web Platform",
  description:
    "Berhampur School of Engineering & Technology (BSET), Berhampur, Odisha - AICTE Approved, SCTE & VT Affiliated Polytechnic Diploma Engineering College",
  keywords: [
    "BSET Berhampur",
    "Berhampur School of Engineering and Technology",
    "Diploma Engineering College Odisha",
    "Polytechnic College Berhampur",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Electronics and Telecommunication",
    "Admissions 2026",
    "Placements",
    "CRT",
  ],
  authors: [{ name: "BSET Berhampur" }],
  creator: "BSET Berhampur",
  openGraph: {
    title: "BSET Berhampur | Official Web Platform",
    description:
      "Empowering Engineering Minds for Tomorrow's Technology - Official web platform for BSET Berhampur",
    url: "https://bsetberhampur.ac.in",
    siteName: "BSET Berhampur",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "BSET Berhampur Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BSET Berhampur",
    description: "Official web platform for BSET Berhampur",
    images: ["/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-48x48.png", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}