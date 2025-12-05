import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Extend the Session type to include user.id
declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        const adminName = process.env.ADMIN_NAME;
        const adminPassword = process.env.ADMIN_PASSWORD;

        // Check if environment variables are set
        if (!adminName || !adminPassword) {
          console.error("Admin credentials not set in environment variables");
          return null;
        }

        if (
          credentials.username === adminName &&
          credentials.password === adminPassword
        ) {
          return { id: credentials.username, name: credentials.username };
        }

        console.error("Invalid credentials");
        return null;
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = String(token.id);
        session.user.name = String(token.id);
      }
      return session;
    },
  },

  pages: {
    signIn: "/admin/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
