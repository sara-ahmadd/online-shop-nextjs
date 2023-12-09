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
          throw new Error("email or password is missing or incorrect.");
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
        };
        return user;
      },
    }),
    GoogleProvider({
      // async profile(profile: GoogleProfile) {
      //   console.log({
      //     ...profile,
      //     id: profile.aud,
      //     image: profile.picture,
      //   });

      //   await connectdb();
      //   const userCheck = (await User.findOne({
      //     email: profile.email,
      //   })) as UserType;

      //   if (userCheck) {
      //     return {
      //       ...profile,
      //       image: userCheck?.image,
      //       name: userCheck?.name,
      //       email: userCheck.email,
      //       role: userCheck.role,
      //       _id: userCheck._id,
      //       id: profile.aud,
      //     };
      //   } else {
      //     await connectdb();
      //     const name = profile.name;
      //     const email = profile.email;
      //     const image = profile.picture;
      //     const role = profile.role ?? "user";
      //     await User.create({
      //       name,
      //       email,
      //       image,
      //       role,
      //     });
      //   }
      //   return {
      //     ...profile,
      //     id: profile.aud,
      //     image: profile.picture,
      //     role: profile.role ?? "user",
      //   };
      // },
      clientId: process.env.CLIENT_ID_GOOGLE as string,
      clientSecret: process.env.CLIENT_SECRET_GOOGLE as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token }: any) {
      await connectdb();
      const userCheck = (await User.findOne({
        email: token.email,
      })) as UserType;

      if (userCheck) {
        return {
          ...token,
          image: userCheck?.image,
          name: userCheck?.name,
          email: userCheck.email,
          role: userCheck.role ?? "user",
          _id: userCheck._id,
        };
      } else {
        await connectdb();
        const name = token.name;
        const email = token.email;
        const image = token.picture;
        const role = token.role ?? "user";
        const userCreated = await User.create({
          name,
          email,
          image,
          role,
        });
        return userCreated;
      }
    },
    async session({ session, token, user }) {
      session.user = token;
      console.log("session_sessino", session.user);
      return session;
    },
  },
  pages: {
    newUser: "/signup",
    signIn: "/signin",
  },
};
