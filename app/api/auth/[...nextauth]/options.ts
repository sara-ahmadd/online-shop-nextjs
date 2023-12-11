import { connectdb } from "@/database/mongodb";
import User from "@/models/user";
import { ProductType, UserType } from "@/types";
import { compare } from "bcrypt-ts";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import type { GoogleProfile } from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
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
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("email or password is missing.");
        }
        await connectdb();
        const data = (await User.findOne({
          email: credentials?.email,
        })) as UserType;

        if (!data || !data.password) {
          throw new Error("User doesnot exist.");
        }
        const passwordMatch = await compare(
          credentials.password,
          data.password
        );
        if (!passwordMatch) {
          throw new Error("password is not correct.");
        }
        const user = {
          id: data._id as string,
          name: data.name as string,
          image: data.image as string,
          email: data.email as string,
          cart: data.cart as ProductType[],
          role: data.role,
        };
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.CLIENT_ID_GOOGLE as string,
      clientSecret: process.env.CLIENT_SECRET_GOOGLE as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: any) {
      const name = token.name;
      const email = token.email;
      const image = token.picture;
      await connectdb();
      const userCheck = (await User.findOne({
        email,
      })) as UserType;

      if (!userCheck) {
        await connectdb();
        const role = "user";
        await User.create({
          name,
          email,
          image,
          cart: [],
          role,
        });
        return token;
      }
      return {
        image: userCheck.image,
        name: userCheck.name,
        email: userCheck.email,
        cart: userCheck.cart,
        role: userCheck.role ?? "user",
        _id: userCheck._id,
      };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    newUser: "/signup",
    signIn: "/signin",
  },
};
