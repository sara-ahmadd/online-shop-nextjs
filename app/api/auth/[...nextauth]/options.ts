import { connectdb } from "@/database/mongodb";
import { getUserData } from "@/lib/user/getUser";
import User from "@/models/user";
import { ProductType, UserType } from "@/types";
import { NextAuthOptions, Profile } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";

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
        await connectdb();
        const data: UserType = (await User.findOne({
          email: credentials?.email,
        })) as UserType;
        const user = {
          id: data._id as string,
          name: data.name as string,
          image: data.image as string,
          email: data.email as string,
          password: data.password as string,
          cart: data.cart as ProductType[],
        };
        if (
          user.name !== credentials?.username ||
          user.password !== credentials?.password ||
          user.email !== credentials.email
        ) {
          return null;
        } else {
          return user;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.CLIENT_ID_GOOGLE as string,
      clientSecret: process.env.CLIENT_SECRET_GOOGLE as string,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      try {
        await connectdb();
        const userFromDB: UserType = (await User.findOne({
          email: profile?.email,
        })) as UserType;
        if (!userFromDB) {
          await User.create({
            name: profile?.name,
            image: profile?.image ?? "/spinner.gif",
            email: profile?.email,
            cart: [] as ProductType[],
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
  pages: {
    newUser: "/signup",
  },
};
