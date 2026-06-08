import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ziproh Compliance Centre | The Better Way to Care",
  description: "Ziproh's compliance management platform for UK health and social care providers. Access 340+ auto-updated policies, audit tools, and compliance resources.",
  icons: {
    icon: "/ziproh-icon.png",
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
