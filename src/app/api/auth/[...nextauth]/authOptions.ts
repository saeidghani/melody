import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      //@ts-ignore
      authorize(credentials) {
        const { accessToken, refreshToken } = credentials || {};
        if (!accessToken || !refreshToken) {
          return null;
        }

        return {
          accessToken,
          refreshToken,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        const tokens = user as unknown as {
          accessToken: string;
          refreshToken: string;
        };

        return {
          accessToken: tokens?.accessToken,
          refreshToken: tokens?.refreshToken,
        };
      }
      return token;
    },
    //@ts-ignore
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session?.user,
          accessToken: token?.accessToken,
          refreshToken: token?.refreshToken,
        },
      };
    },
  },
  pages: {
    signIn: "/signin",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
