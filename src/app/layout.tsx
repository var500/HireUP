"use client";
import { SessionProvider } from "next-auth/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={"flex flex-col h-full justify-between"}>
        <SessionProvider>
          <div className={inter.className}>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
