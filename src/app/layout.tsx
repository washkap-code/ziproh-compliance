import type { Metadata } from "next";
import "./globals.css";

const APP_URL = "https://app.ziprohtraining.co.uk";

export const metadata: Metadata = {
  title: "Ziproh Compliance Centre | The Better Way to Care",
  description: "Ziproh's compliance management platform for UK health and social care providers. Access 169 auto-updated policies, audit tools, and compliance resources.",
  metadataBase: new URL(APP_URL),
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Ziproh",
    statusBarStyle: "default",
  },
  openGraph: {
    title: "Ziproh Compliance Centre | The Better Way to Care",
    description: "169 auto-updated policies, audit tools, and eLearning for UK care providers. Stay CQC inspection-ready, every day.",
    url: APP_URL,
    siteName: "Ziproh Compliance Centre",
    images: [
      {
        url: `${APP_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ziproh Compliance Centre",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziproh Compliance Centre",
    description: "169 auto-updated policies, audit tools, and eLearning for UK care providers.",
    images: [`${APP_URL}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
