import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coinstack — Duolingo for Personal Finance",
  description: "3 minutes a day. Real money habits. Build better spending habits with daily micro-challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1B4332" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
