"use server";

import { auth, signIn } from "../auth";

// Login pakai email & password
export const credentialLogin = async (email, password) => {
  try {
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    return res; // res.error akan berisi error jika gagal
  } catch (error) {
    console.error("Credential login failed:", error);
    return { error: "Login error" };
  }
};

// Login pakai Google
export const googleLogin = async () => {
  try {
    await signIn("google", {
      redirect: true, // Biarkan redirect default
      callbackUrl: "/", // Atur halaman setelah login sukses
    });
  } catch (error) {
    console.error("Google login error:", error);
    throw error; // Lempar error untuk ditangkap di client
  }
};

export const getSession = async () => {
  const session = await auth();
  return session;
};
