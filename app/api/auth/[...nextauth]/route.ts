import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";

export const OPTIONS: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID_GOOGLE as string,
      clientSecret: process.env.CLIENT_SECRET_GOOGLE as string,
    }),

    CredentialsProvider({
      name: "Credintials",
      credentials: {
        username: {
          label: "UserName",
          type: "text",
          placeholder: "Your user name",
        },
        password: { label: "Password", type: "password" },
        email: { label: "Email", type: "email", placeholder: "Your Email" },
      },
      async authorize(credentials, _req) {
        const user = { id: "122", name: "sara", password: "123" };
        if (
          user.name !== credentials?.username ||
          user.password !== credentials.password
        ) {
          return null;
        } else {
          return user;
        }
      },
    }),
  ],
  pages: {
    newUser: "/signup",
  },
};
const handler = NextAuth(OPTIONS);
export { handler as GET, handler as POST };
