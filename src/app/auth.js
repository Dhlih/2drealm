import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectDB } from "./lib/mongodb";
import User from "./models/User";
import { compare } from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) {
          throw new Error("Please provide both email and password");
        }

        await connectDB();

        const existingUser = await User.findOne({ email }).select(
          "+password +role"
        );

        if (!existingUser || !existingUser.password) {
          throw new Error("Invalid email or password");
        }

        const isMatched = await compare(password, existingUser.password);

        if (!isMatched) {
          throw new Error("Password did not match");
        }

        const userData = {
          id: existingUser._id,
          firstName: existingUser.firstName,
          lastName: existingUser.lastName,
          email: existingUser.email,
          role: existingUser.role,
        };

        return userData;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },

  // fungsi yang dijalankan setelah memenuhi kondisi tertentu
  callbacks: {
    async session({ session, token }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      return session;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl;
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },

    signIn: async ({ user, account }) => {
      if (account?.provider === "google") {
        try {
          const { email, name } = user;
          await connectDB();

          const existingUser = await User.findOne({ email });

          if (!existingUser) {
            await User.create({ email, username: name });
          } else {
            return true;
          }
        } catch (error) {
          throw new Error("Error while creating user");
        }
      }

      if (account?.provider === "credentials") {
        return true;
      } else {
        return false;
      }
    },
  },
});
