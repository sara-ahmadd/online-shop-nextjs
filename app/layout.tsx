import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useContext, useEffect, useState } from "react";
import ThemeProvider, { themeContext } from "./context/Theme";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";
import ThemeBtn from "./components/ThemeBtn";
import SearchContextProvider from "./context/Search";

export const metadata: Metadata = {
  title: "Online Shop",
  description: "Enjoy Shopping!!",
};
export const revalidate = 0;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <SearchContextProvider>
          <body>
            <Parent>
              <Navbar />
              {children}
            </Parent>
          </body>
        </SearchContextProvider>
      </ThemeProvider>
    </html>
  );
}
