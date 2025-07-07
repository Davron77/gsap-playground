import { Inter } from "next/font/google";
import { Metadata } from "next";
//Components
import SmootherProvider from "./SmootherProvider";
//CSS
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samarkand",
  description: "Samarkand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <SmootherProvider>{children}</SmootherProvider>
      </body>
    </html>
  );
}
