import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./context/Theme";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";
import SearchContextProvider from "./context/Search";
import AuthProvider from "./context/AuthProvider";
import CartContextProvider from "./context/CartContext";
import StoreProvider from "@/redux/StoreProvider";

export const metadata: Metadata = {
  title: "Online Shop",
  description: "Enjoy Shopping!!",
};
export const revalidate = 0;
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <ThemeProvider>
          <SearchContextProvider>
            <StoreProvider>
              <body>
                <Navbar />
                <Parent>{children}</Parent>
              </body>
            </StoreProvider>
          </SearchContextProvider>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
}
