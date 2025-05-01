"use client";

import { IoEyeOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa6";

import { useState } from "react";

const FeedCard = () => {
  const [isSave, setIsSave] = useState(false);
  return (
    <div className="w-full bg-secondary py-[1.2rem] px-[1.5rem] rounded-xl mb-[2rem]">
      <div>
        <div>
          {/* user profile */}
          <div className="flex justify-between items-center mb-[0.6rem]">
            <div className="flex items-center space-x-[1rem]">
              <div className="w-10 h-10 rounded-full bg-white"></div>
              <div>
                <span className="block text-sm font-medium">Dhlihh</span>
                <span className="text-white/75 text-sm">April 23 2025</span>
              </div>
            </div>
            <span className="bg-[#FFA94D] h-8 px-3 flex items-center rounded-md">
              Anime
            </span>
          </div>
        </div>

        {/* text group */}
        <div className="space-y-[5px]">
          <h3 className="text-xl font-medium">Apa Anime Terbaik Menurutmu?</h3>
          <p className="text-white/75 max-w-[90%]">
            Penasaran sama judul anime terbaik versi kalian, soalnya gw
            akhir-akhir ini lagi bingung mau nonton anime apa
          </p>
        </div>

        {/* metrics */}
        <div className="flex justify-between mt-[1rem]">
          <div className="flex space-x-[2rem] items-center">
            <div className="flex items-center space-x-3">
              <IoEyeOutline className="text-xl cursor-pointer" />
              <span>255</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaRegComment className="cursor-pointer" />
              <span>55</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaRegHeart className="cursor-pointer" />
              <span>170</span>
            </div>
          </div>

          {/* save post button */}
          {!isSave ? (
            <IoBookmarkOutline
              className="text-xl cursor-pointer"
              onClick={() => setIsSave(true)}
            />
          ) : (
            <FaBookmark
              className="text-xl cursor-pointer"
              onClick={() => setIsSave(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
