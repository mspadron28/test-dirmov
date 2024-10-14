import type { Metadata } from "next";
import { lusitana } from './ui/fonts';
import "./globals.css";



export const metadata: Metadata = {
  title: "Test DIRMOV",
  description: "Prototipo del test psicológico de la DIRMOV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={`${lusitana.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
