"use client";
import { useState } from "react";
import Link from "next/link";

const SideMenu = () => {
  const [isActive, setIsActive] = useState();
  const feeds = ["Latest", "Trending", "Saved"];
  const categories = [
    "All",
    "Anime",
    "Manhwa",
    "Manga",
    "Game",
    "Music",
    "Novel",
  ];

  return (
    <div className="md:px-[6rem] px-[3.5rem] py-[3rem] text-white/75 text-lg md:w-[30%] md:block hidden fixed overflow-scroll ">
      <div className="space-y-[1rem]">
        <div>
          <span>Feeds</span>
          <ul className="mt-2 space-y-2">
            {feeds.map((feed) => (
              <li
                key={feed}
                className={`px-[1rem] rounded-md cursor-pointer py-[2px]${
                  isActive === feed ? "bg-secondary" : "bg-none"
                } `}
                onClick={() => {
                  setIsActive(feed);
                  console.log(isActive, feed);
                }}
              >
                <button className=" cursor-pointer">{feed}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span>Categories</span>
          <ul className="mt-2 space-y-2">
            {categories.map((feed) => (
              <li
                key={feed}
                className={`px-[1rem] rounded-md cursor-pointer py-[2px] ${
                  isActive === feed ? "bg-secondary " : "bg-none"
                } `}
                onClick={() => {
                  setIsActive(feed);
                  console.log(isActive, feed);
                }}
              >
                <button className=" cursor-pointer">{feed}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
