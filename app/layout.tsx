import Footer from "@/components/footer";
import Header from "@/components/header";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://itsanjaal.com"),

  title: "IT Sanjaal Pvt. Ltd. - Leading Digital Innovation Company",
  description:
    "Transform your business with our cutting-edge digital solutions. We specialize in web development, mobile apps, AI integration, and digital transformation services.",

  keywords:
    "web development, mobile apps, AI solutions, digital transformation, software development, tech consulting",
  authors: [{ name: "IT Sanjaal Pvt. Ltd." }],
  creator: "IT Sanjaal Pvt. Ltd.",
  publisher: "IT Sanjaal Pvt. Ltd.",

  formatDetection: { email: false, address: false, telephone: false },

  alternates: {
    canonical: "/",
  },

  // ✅ Proper favicon + icons setup
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // ✅ Open Graph SEO
  openGraph: {
    title: "IT Sanjaal Pvt. Ltd. - Leading Digital Innovation Company",
    description:
      "Transform your business with our cutting-edge digital solutions. We specialize in web development, mobile apps, AI integration, and digital transformation services.",
    url: "https://itsanjaal.com",
    siteName: "IT Sanjaal Pvt. Ltd.",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "IT Sanjaal Pvt. Ltd. Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter SEO
  twitter: {
    card: "summary_large_image",
    title: "IT Sanjaal Pvt. Ltd. - Leading Digital Innovation Company",
    description:
      "Transform your business with our cutting-edge digital solutions.",
    images: ["/Logo.png"],
  },

  // ✅ Robots
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Web Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ JSON-LD (Fixed logo to PNG for Google) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IT Sanjaal Pvt. Ltd.",
              url: "https://itsanjaal.com",
              logo: "https://itsanjaal.com/favicon.png",
              description:
                "Leading digital innovation company specializing in web development, mobile apps, and AI solutions.",
              telephone: "+977-9863459299",
              address: {
                "@type": "PostalAddress",
                addressCountry: "NP",
              },
              sameAs: [
                "https://www.facebook.com/itsanaal",
                "https://www.instagram.com/itsanjaal",
              ],
            }),
          }}
        />

        {/* Apply Geist fonts */}
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>

      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
