import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Beatriz Cercal Cachoeira",
  description: "Systems Development Technician / Software Engineer Student — Joinville, SC, Brazil",
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  openGraph: {
    title: "Beatriz Cercal Cachoeira",
    description: "Systems Development Technician / Software Engineer Student — Joinville, SC, Brazil",
    images: [{ url: "https://i.postimg.cc/gkRB92QV/beatriz-cercal-cachoeira-2400x1260.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beatriz Cercal Cachoeira",
    description: "Systems Development Technician / Software Engineer Student — Joinville, SC, Brazil",
    images: ["https://i.postimg.cc/gkRB92QV/beatriz-cercal-cachoeira-2400x1260.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
