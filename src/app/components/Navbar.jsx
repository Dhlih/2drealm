"use client";

import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { getSession } from "../lib/auth";
import { FiEdit } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineNotificationsNone } from "react-icons/md";

const Navbar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [user, setUser] = useState("");

  useEffect(async () => {
    const fetchUser = async () => {
      const session = await getSession();
      setUser(session);
    };
    fetchUser();
  }, []);

  return (
    <div className="  z-[60] fixed top-0 left-0 right-0">
      <div className=" bg-[#191C24] flex md:px-[6rem] px-[1.5rem] py-[1rem] justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative md:w-12 md:h-12 w-10 h-10">
            <Image src={"/images/chibi.png"} alt="Chibi Girl" fill />
          </div>
          <Link href="/" className="font-medium md:text-2xl text-lg">
            2DREALM
          </Link>
        </div>

        <div className="center-side items-center justify-between md:bg-primary sm:bg-none rounded-lg py-3 px-5 text-sm md:w-[35%] w-[40%] space-x-6 md:flex hidden">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="w-full outline-none "
          />
          <IoIosSearch className="text-lg opacity-60 md:block hidden" />
          <IoIosSearch
            className="text-lg opacity-60 md:hidden block"
            onClick={() => setIsSearching(true)}
          />
        </div>

        <div className="right-side flex items-center gap-[2rem]">
          {user && (
            <div className="flex items-center md:space-x-[2rem] space-x-[1.5rem]">
              <IoIosSearch className="md:w-[1.7rem] md:h-[1.7rem] w-[1.1rem] h-[1.1rem] cursor-pointer md:hidden" />
              <div className="flex items-center md:space-x-[1rem] cursor-pointer">
                <FiEdit className="md:w-[1.7rem] md:h-[1.7rem] w-[1.1rem] h-[1.1rem]  " />
                <span className="pt-1 hidden md:block ">Write</span>
              </div>
              <MdOutlineNotificationsNone className="md:w-[1.8rem] md:h-[1.8rem] w-[1.3rem] h-[1.3rem]  cursor-pointer" />
              {user?.image && (
                <div className="relative md:w-12 md:h-12 w-10 h-10">
                  <Image
                    alt="user profile"
                    src={user.image}
                    fill
                    className="rounded-full"
                  ></Image>
                </div>
              )}
            </div>
          )}
          {!user && (
            <div className="auth-button space-x-[2rem] text-lg">
              <Link href="/register">Register</Link>
              <Link
                href="/login"
                className="bg-accent text-black py-2 px-6 rounded-lg font-medium"
              >
                Log In
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* show searchbar in mobile */}
      {isSearching && (
        <div className="bg-[#12161D] md:hidden px-[2rem] py-3">
          <div className="flex items-center rounded-lg ">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent outline-none text-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
