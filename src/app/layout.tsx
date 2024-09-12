import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google"
import "./globals.css";

const lexend = Lexend_Deca({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Annual Performance and Evaluation Report",
  description: "APER form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className}`}
      >
        {children}
      </body>
    </html>
  );
}
