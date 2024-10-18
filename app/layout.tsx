import type { Metadata } from "next";
import { Plus_Jakarta_Sans }from "next/font/google";
import "./globals.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {cn} from '@/lib/utils'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function localFont(arg0: { src: string; variable: string; weight: string; }) {
  throw new Error("Function not implemented.");
}

