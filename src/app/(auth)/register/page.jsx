"use client";

import Image from "next/image";
import Link from "next/link";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // ✅ ganti dari next/router ke next/navigation

const Register = () => {
  const [isHide, setIsHide] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const router = useRouter();

  const handleHidePassword = () => {
    setIsHide(!isHide);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !username || !password) {
      return;
    }

    try {
      await axios.post("/api/auth/register", {
        username,
        email,
        password,
      });

      router.push("/login"); // ✅ redirect setelah register sukses
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.message || "Terjadi kesalahan");
    }
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center mt-[9rem] mb-[4rem]">
        <div className="bg-secondary rounded-xl p-8 md:w-[35%] w-[70%] shadow-md">
          <div className="text-center">
            <h3 className="text-3xl font-semibold mb-1">Welcome!</h3>
            <span className="text-white/75 w-full">
              Let’s create your account
            </span>
          </div>

          <form className="space-y-2 mt-6" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <span className="block text-sm font-medium">Username</span>
              <div className="flex items-center bg-primary rounded-lg py-2 px-5">
                <input
                  type="text"
                  className="w-full text-sm outline-none"
                  placeholder="Enter username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>
            </div>

            <div className="space-y-1">
              <span className="block text-sm font-medium">Email</span>
              <div className="flex items-center bg-primary rounded-lg py-2 px-5">
                <input
                  type="email"
                  className="w-full text-sm outline-none"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>

            <div className="space-y-1">
              <span className="block text-sm font-medium">Password</span>
              <div className="flex items-center bg-primary rounded-lg py-2 px-5 space-x-6">
                <input
                  type={isHide ? "password" : "text"}
                  className="w-full text-sm outline-none"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {isHide ? (
                  <IoEyeOffOutline
                    className="opacity-60 cursor-pointer"
                    onClick={handleHidePassword}
                  />
                ) : (
                  <IoEyeOutline
                    className="opacity-60 cursor-pointer"
                    onClick={handleHidePassword}
                  />
                )}
              </div>
            </div>

            <button
              className="w-full p-2 bg-accent mt-4 rounded-lg text-black text-sm font-medium cursor-pointer"
              type="submit"
            >
              Register
            </button>
          </form>

          <div className="flex justify-center mt-6 space-x-1">
            <span className="text-sm">Already have an account?</span>
            <Link
              href="/login"
              className="text-accent underline hover:opacity-80 text-sm"
            >
              Login here
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
