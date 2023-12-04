import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./context/Theme";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";
import SearchContextProvider from "./context/Search";
import AuthProvider from "./context/AuthProvider";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { getUserData } from "@/lib/user/getUser";
import { redirect } from "next/navigation";
import Footer from "./components/Footer";
import SubscribeSection from "./components/SubscribeSection";

export const metadata: Metadata = {
  title: "Online Shop",
  description: "Enjoy Shopping!!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);
  const userFromDb = await getUserData(session?.user?.email ?? "");

  return (
    <html lang="en">
      <AuthProvider>
        <ThemeProvider>
          <SearchContextProvider>
            <body>
              <Navbar user={userFromDb} />
              <Parent>{children}</Parent>
              
            </body>
          </SearchContextProvider>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
}
