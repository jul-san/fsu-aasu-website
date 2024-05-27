import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({ subsets: ["latin"], weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"]});

export const metadata: Metadata = {
  title: "Asian American Student Union | Florida State University",
  description: "The official website of the Asian American Student Union at Florida State University!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ChakraProvider>{children}</ChakraProvider>
        <Analytics/>
      </body>
    </html>
  );
}
