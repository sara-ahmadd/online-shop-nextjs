import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./context/Theme";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";
import AuthProvider from "./context/AuthProvider";
import ToastProvider from "./context/ToastProvider";
import RefreshContextProvider from "./context/RefreshContext";

export const metadata: Metadata = {
  title: "Online Shop",
  description: "Enjoy Shopping!!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <ThemeProvider>
          <RefreshContextProvider>
            <body>
              <Navbar />
              <Parent>
                <ToastProvider />
                {children}
              </Parent>
            </body>
          </RefreshContextProvider>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
}
