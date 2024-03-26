"use client";
import { SessionProvider } from "next-auth/react";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const metadata: Metadata = {
  title: "HireUp",
  description: "Hire Talents Quickly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"flex flex-col h-screen justify-between "}>
        <SessionProvider>
          <div className={roboto_mono.className}>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
