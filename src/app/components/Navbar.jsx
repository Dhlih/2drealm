import React from "react";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-[#191C24] py-[1.5rem]">
      <div className="flex md:px-[6rem] px-[1.5rem] justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src={"/images/chibi.png"}
            alt="Chibi Girl"
            width={50}
            height={50}
          />
          <h3 className="font-medium text-2xl">2DREALM</h3>
        </div>
        <div className="center-side flex items-center justify-between bg-primary rounded-lg py-3 px-5 text-sm md:w-[35%] w-[40%]">
          <input type="text" name="search" placeholder="Search..." />
          <IoIosSearch className="text-base opacity-60" />
        </div>
        <div className="right-side flex gap-[2rem]">
          {/* <div className="flex items-center space-x-[1rem]">
            <FiEdit />
            <span>Write</span>
          </div> */}
          <div className="auth-button space-x-[2rem] text-lg">
            <button className="">Register</button>
            <button className="bg-accent text-black py-1 px-6 rounded-lg">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
