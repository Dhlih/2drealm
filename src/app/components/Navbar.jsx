import React from "react";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[#191C24] py-[1.2rem] z-[60] fixed top-0 left-0 right-0">
      <div className="flex md:px-[6rem] px-[1.5rem] justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src={"/images/chibi.png"}
            alt="Chibi Girl"
            width={50}
            height={50}
          />
          <Link href="/" className="font-medium text-2xl">
            2DREALM
          </Link>
        </div>
        <div className="center-side flex items-center justify-between bg-primary rounded-lg py-3 px-5 text-sm md:w-[35%] w-[40%] space-x-6">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="w-full outline-none"
          />
          <IoIosSearch className="text-lg opacity-60" />
        </div>
        <div className="right-side flex gap-[2rem]">
          {/* <div className="flex items-center space-x-[1rem]">
            <FiEdit />
            <span>Write</span>
          </div> */}
          <div className="auth-button space-x-[2rem] text-lg">
            <Link href="/register">Register</Link>
            <Link
              href="/login"
              className="bg-accent text-black py-2 px-6 rounded-lg font-medium"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
