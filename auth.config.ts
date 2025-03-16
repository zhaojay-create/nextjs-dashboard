import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user; // 是否已登录
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard"); // 是否访问 Dashboard 页面

      // 🎯 1️⃣ 访问 /dashboard 路由
      if (isOnDashboard) {
        if (isLoggedIn) return true; // ✅ 已登录，允许访问
        return false; // ❌ 未登录，拒绝访问（会被重定向到 /login）
      }

      // 🎯 2️⃣ 访问其他非 /dashboard 页面
      else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl)); // ✅ 已登录的用户访问其他页面时，重定向到 /dashboard
      }

      return true; // ✅ 默认允许访问（未登录访问非 /dashboard 页面）
    },
  },
  providers: [],
} satisfies NextAuthConfig;
