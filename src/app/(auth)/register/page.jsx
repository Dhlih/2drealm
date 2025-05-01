"use client";

import Image from "next/image";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { useState } from "react";

const Register = () => {
  const [isHide, setIsHide] = useState(false);

  const handleHidePassword = () => {
    setIsHide(!isHide);
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex items-center justify-center mt-[9rem] mb-[4rem]">
        <div className="bg-secondary rounded-xl p-6 md:w-[32%] w-[70%] shadow-md ">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-1">Welcome!</h3>
            <span className="text-white/75 w-full">
              Let’s create your account
            </span>
          </div>

          {/* input field */}
          <div className="space-y-2 mt-6">
            <div className="space-y-3 ">
              <span className="block text-sm font-medium">Email</span>
              <div className="flex items-center justify-between bg-primary outline-1 outline-[#4a4a4a] rounded-lg py-2 px-5 ">
                <input
                  type="text"
                  className=" w-full text-sm outline-none"
                  placeholder="Enter email address"
                />
              </div>
            </div>

            <div className="space-y-2">
              <span className="block text-sm font-medium">Password</span>
              <div className="flex items-center justify-between bg-primary outline-1 outline-[#4a4a4a] rounded-lg py-2 px-5 space-x-6">
                <input
                  type={isHide ? "text" : "password"}
                  className=" w-full text-sm outline-none"
                  placeholder="Enter password"
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
            <button className="w-full text-center p-2 bg-accent mt-4 rounded-lg text-black text-sm font-medium cursor-pointer">
              Register
            </button>
          </div>

          {/* google option */}
          <div className="mt-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="bg-white/50 w-[30%] h-[1px]"></div>
              <span className="text-sm">Or register with</span>
              <div className="bg-white/50 w-[30%] h-[1px]"></div>
            </div>
            <button className="w-full text-center p-2 bg-primary mt-4 rounded-lg flex items-center justify-center space-x-2 outline-1 outline-[#4a4a4a] cursor-pointer">
              <Image
                src="/images/google.png"
                width={23}
                height={23}
                alt="Google icon"
              />
              <span className="text-sm">Register with Google</span>
            </button>
          </div>

          {/* register */}
          <div className="flex items-center justify-center mt-4 space-x-1">
            <span className="text-sm block text-center">
              Already have an account?{" "}
            </span>
            <Link
              href="/register"
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
