import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./context/Theme";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";
import SearchContextProvider from "./context/Search";
import AuthProvider from "./context/AuthProvider";
import CartContextProvider from "./context/CartContext";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { getUserData } from "@/lib/user/getUser";

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
  const session = await getServerSession(options);
  if (!session) {
    redirect("/");
  }

  const user = await getUserData(session.user?.email ?? "");
  return (
    <html lang="en">
      <AuthProvider>
        <ThemeProvider>
          <SearchContextProvider>
            <CartContextProvider>
              <body>
                <Navbar user={user} />
                <Parent>{children}</Parent>
              </body>
            </CartContextProvider>
          </SearchContextProvider>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
}
