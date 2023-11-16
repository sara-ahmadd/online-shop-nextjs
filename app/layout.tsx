import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useContext, useEffect, useState } from "react";
import ThemeProvider, { themeContext }  from "./context/Theme.tsx";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";
import ThemeBtn from "./components/ThemeBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Shop",
  description: "Enjoy Shopping!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <Parent>
            <Navbar/>
            {children}
          </Parent>
        </body>
      </ThemeProvider>
    </html>
  );
}
