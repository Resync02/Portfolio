import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iqbal Hafidz Ramadhan",
  description: "Portfolio of Iqbal Hafidz Ramadhan — Freelancer & Informatics Engineering Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
