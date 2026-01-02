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
  title: "Hannah's Legacy Home - Bill Payment Portal",
  description: "Pay your monthly water and electricity bills easily with Hannah's Legacy Home secure member portal.",
  keywords: "pay bills, electricity, water, GWCL, ECG, Hannah's Legacy Home, monthly subscription, utility payment",
  icons: {
    icon: "https://ik.imagekit.io/humbling/6a8072f2-bf06-4bf0-b2cd-ff2c971a6881.png",
    shortcut: "https://ik.imagekit.io/humbling/6a8072f2-bf06-4bf0-b2cd-ff2c971a6881.png",
    apple: "https://ik.imagekit.io/humbling/6a8072f2-bf06-4bf0-b2cd-ff2c971a6881.png",
  },
  openGraph: {
    title: "Hannah's Legacy Home - Bill Payment Portal",
    description: "Secure payment gateway for electricity and water bills. Pay on time, stay connected.",
    type: "website",
    siteName: "Hannah's Legacy Home",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bill Payment Portal - Water & Electricity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hannah's Legacy Home - Bill Payment Portal",
    description: "Secure payment gateway for electricity and water bills.",
    images: ["/og-image.png"],
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
