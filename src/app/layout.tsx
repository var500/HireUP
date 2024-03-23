import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
      <body className={"h-full flex flex-col justify-between "}>
        <div className={inter.className}>{children}</div>
      </body>
    </html>
  );
}
