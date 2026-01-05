import Footer from "@/components/footer";
import Header from "@/components/header";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

// ✅ IMPORTANT: Place favicon.ico inside the public/ folder
// public/
//   favicon.ico
//   opengraph-image.jpg

export const metadata: Metadata = {
  title: "IT Sanjaal Pvt. Ltd. - Leading Digital Innovation Company",
  description:
    "Transform your business with our cutting-edge digital solutions. We specialize in web development, mobile apps, AI integration, and digital transformation services.",

  // ✅ Add favicon icon metadata here
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", // optional (for iOS)
  },

  keywords:
    "web development, mobile apps, AI solutions, digital transformation, software development, tech consulting",
  authors: [{ name: "IT Sanjaal Pvt. Ltd." }],
  creator: "IT Sanjaal Pvt. Ltd.",
  publisher: "IT Sanjaal Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://itsanjaal.com"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "IT Sanjaal Pvt. Ltd. - Leading Digital Innovation Company",
    description:
      "Transform your business with our cutting-edge digital solutions. We specialize in web development, mobile apps, AI integration, and digital transformation services.",
    url: "https://itsanjaal.com",
    siteName: "IT Sanjaal Pvt. Ltd.",
    images: [
      {
        url: "/Logo.png", // ✅ Use proper OG image instead of favicon
        width: 1200,
        height: 630,
        alt: "IT Sanjaal Pvt. Ltd. Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "IT Sanjaal Pvt. Ltd. - Leading Digital Innovation Company",
    description:
      "Transform your business with our cutting-edge digital solutions.",
    images: ["/Logo.png"], // ✅ Use proper Twitter image instead of favicon
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        {/* ✅ JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IT Sanjaal Pvt. Ltd.",
              url: "https://itsanjaal.com",
              logo: "https://itsanjaal.com/favicon.ico",
              description:
                "Leading digital innovation company specializing in web development, mobile apps, and AI solutions",
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

        {/* ✅ Apply Geist fonts globally */}
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
