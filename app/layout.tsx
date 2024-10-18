import type { Metadata } from "next";
import { Plus_Jakarta_Sans }from "next/font/google";
import "./globals.css";
import {cn} from '@/lib/utils'

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CarePulse",
  description: "A healthcare management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="{cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}">
        {children}
      </body>
    </html>
  );
}
function localFont(arg0: { src: string; variable: string; weight: string; }) {
  throw new Error("Function not implemented.");
}

