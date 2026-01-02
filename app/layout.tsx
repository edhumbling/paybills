import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hannah's Legacy Home - Bill Payments",
  description: "Pay your monthly water and electricity bills easily with Hannah's Legacy Home member portal.",
  keywords: "pay bills, electricity, water, GWCL, Hannah's Legacy Home, monthly subscription",
  icons: {
    icon: "https://ik.imagekit.io/humbling/6a8072f2-bf06-4bf0-b2cd-ff2c971a6881.png",
    shortcut: "https://ik.imagekit.io/humbling/6a8072f2-bf06-4bf0-b2cd-ff2c971a6881.png",
    apple: "https://ik.imagekit.io/humbling/6a8072f2-bf06-4bf0-b2cd-ff2c971a6881.png",
  },
  openGraph: {
    title: "Hannah's Legacy Home - Bill Payments",
    description: "Pay your monthly water and electricity bills easily",
    type: "website",
    images: ["https://ik.imagekit.io/humbling/6a8072f2-bf06-4bf0-b2cd-ff2c971a6881.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="animated-bg"></div>
        {children}
      </body>
    </html>
  );
}
