"use client";
import { useState } from "react";
import Link from "next/link";

const SideMenu = () => {
  const [isActive, setIsActive] = useState();
  const posts = ["Latest", "Trending", "Saved"];
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
    <div className="md:px-[6rem] xl:px-[8rem] py-[3rem] text-white/75 text-lg md:w-[35%] md:block hidden fixed h-[calc(100vh-6rem)]  top-25 left-0 overflow-y-auto scrollbar-hide">
      <div className="pr-[2rem]">
        <div>
          <span className="font-semibold">Posts</span>
          <ul className="mt-2 space-y-2">
            {posts.map((post) => (
              <li
                key={post}
                className={`px-[1rem] rounded-md cursor-pointer py-[2px] ${
                  isActive === post ? "bg-secondary" : "hover:bg-white/10"
                }`}
                onClick={() => setIsActive(post)}
              >
                {post}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4">
          <span className="font-semibold">Categories</span>
          <ul className="mt-2 space-y-2">
            {categories.map((category) => (
              <li
                key={category}
                className={`px-[1rem] rounded-md cursor-pointer py-[2px] ${
                  isActive === category ? "bg-secondary" : "hover:bg-white/10"
                }`}
                onClick={() => setIsActive(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
