import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useContext, useEffect, useState } from "react";
import ThemeProvider, { themeContext } from "./context/Theme";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";
import ThemeBtn from "./components/ThemeBtn";
import SearchContextProvider from "./context/Search";
import UserContextProvider from "./context/UserContext";
import AuthProvider from "./context/AuthProvider";
import CartContextProvider from "./context/CartContext";

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
      <AuthProvider>
        <ThemeProvider>
          <SearchContextProvider>
            <UserContextProvider>
              <CartContextProvider>
                <body>
                  <Navbar />
                  <Parent>{children}</Parent>
                </body>
              </CartContextProvider>
            </UserContextProvider>
          </SearchContextProvider>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
}
