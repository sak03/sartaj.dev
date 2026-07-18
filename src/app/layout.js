import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../scss/style.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SITE_URL, siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.title,
    template: "%s | Sartaj Alam",
  },
  description: siteConfig.description,
  applicationName: "Sartaj Alam Portfolio",
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  keywords: [
    "Sartaj Alam",
    "full stack web developer",
    "Next.js developer",
    "React developer",
    "Laravel developer",
    "frontend developer India",
    "web developer portfolio",
  ],
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": `${SITE_URL}/feed.xml` },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: SITE_URL,
    siteName: "Sartaj Alam Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sartaj Alam — Full Stack Web Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og.png"],
    creator: "@sartaj_03",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  icons: { icon: "/favicon.ico" },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#07110d" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: siteConfig.name,
      url: SITE_URL,
      jobTitle: "Full Stack Web Developer",
      email: `mailto:${siteConfig.email}`,
      sameAs: Object.values(siteConfig.social),
      knowsAbout: ["Next.js", "React", "Laravel", "Node.js", "JavaScript", "Web Development"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Sartaj Alam Portfolio",
      description: siteConfig.description,
      inLanguage: "en-IN",
      author: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s||(p?'dark':'light');if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only skip-to-content-link">
            Skip to main content
          </a>
          <div className="layout-body">
            <div className="layout-header"><Header /></div>
            <main id="main-content" className="layout-section" tabIndex={-1}>
              {children}
            </main>
            <div className="layout-footer"><Footer /></div>
          </div>
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
