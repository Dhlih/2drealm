"use client";

import Image from "next/image";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { credentialLogin, googleLogin } from "@/app/lib/auth";

const Login = () => {
  const [isHide, setIsHide] = useState(false);

  const router = useRouter();

  const handleSubmit = async (formdata) => {
    const email = formdata.get("email");
    const password = formdata.get("password");

    const res = await credentialLogin(email, password);

    if (res?.error) {
      console.log("Login gagal:", res.error);
      return;
    }

    router.push("/");
  };

  const handleHidePassword = () => {
    setIsHide(!isHide);
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center mt-[9rem] mb-[4rem]">
        <div className="bg-secondary rounded-xl p-8 md:w-[35%] w-[70%] shadow-md ">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-1">Welcome Back!</h3>
            <span className="text-white/75 w-full">Let’s get you back in.</span>
          </div>

          {/* input field */}
          <form className="space-y-3 mt-6" action={handleSubmit}>
            <div className="space-y-1 ">
              <div className="flex items-center justify-between bg-primary outline-1 outline-[#4a4a4a] rounded-lg py-2 px-5 ">
                <input
                  type="email"
                  placeholder="email"
                  className=" w-full text-sm outline-none"
                  name="email"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between bg-primary outline-1 outline-[#4a4a4a] rounded-lg py-2 px-5 space-x-6">
                <input
                  type={isHide ? "text" : "password"}
                  className=" w-full text-sm outline-none"
                  name="password"
                  placeholder="password"
                />
                {!isHide ? (
                  <IoEyeOutline
                    className="opacity-60 cursor-pointer"
                    onClick={() => handleHidePassword()}
                  />
                ) : (
                  <IoEyeOffOutline
                    className="opacity-60 cursor-pointer"
                    onClick={() => handleHidePassword()}
                  />
                )}
              </div>
            </div>
            <button
              className="w-full text-center p-2 bg-accent mt-4 rounded-lg text-black text-sm font-medium cursor-pointer"
              type="submit"
            >
              Log In
            </button>
          </form>

          {/* google option */}
          <form className="mt-5" action={googleLogin}>
            <div className="flex items-center justify-between space-x-4">
              <div className="bg-white/50 w-[32%] h-[1px]"></div>
              <span className="text-sm">Or login with</span>
              <div className="bg-white/50 w-[32%] h-[1px]"></div>
            </div>
            <button className="w-full text-center p-2 bg-primary mt-4 rounded-lg flex items-center justify-center space-x-2 outline-1 outline-[#4a4a4a] cursor-pointer">
              <Image
                src="/images/google.png"
                width={23}
                height={23}
                alt="Google icon"
              />
              <span className="text-sm">Log in with Google</span>
            </button>
          </form>

          {/* register */}
          <div className="flex items-center justify-center mt-6 space-x-1">
            <span className="text-sm block text-center">
              Don't have an account?{" "}
            </span>
            <Link
              href="/register"
              className="text-accent underline hover:opacity-80 text-sm"
            >
              Register here
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
