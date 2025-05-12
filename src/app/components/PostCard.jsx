"use client";

import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa6";
import { MdOutlineShare } from "react-icons/md";

import { useState } from "react";
import Link from "next/link";

const PostCard = ({ post }) => {
  const [isSave, setIsSave] = useState(false);
  console.log(post);
  return (
    <div className="w-full bg-secondary py-[1.2rem] px-[1.5rem] rounded-xl mb-[2rem]">
      <div>
        <div>
          {/* user profile */}
          <div className="flex justify-between items-center mb-[0.6rem]">
            <div className="flex items-center space-x-[1rem]">
              <div className="w-10 h-10 rounded-full bg-white"></div>
              <div>
                <span className="block text-sm font-medium text-white">
                  {post.writer}
                </span>
                <span className="text-white/75 text-sm">{post.dateCreate}</span>
              </div>
            </div>

            <div className="text-xl">
              <BsThreeDots />
            </div>
          </div>
        </div>

        {/* text group */}
        <div className="mt-5">
          <Link href={`/posts/${post._id}`} prefetch={false}>
            <h3 className="text-xl font-medium mb-1">{post.title}</h3>
          </Link>
          <p className="text-white/75 max-w-[90%] md:block hidden">
            {post.description.slice(0, 100)} ...
          </p>
          <p className="text-white/75 max-w-[90%] md:hidden">
            {post.description.slice(0, 65)} ...
          </p>
        </div>

        {/* metrics */}
        <div className="flex justify-between mt-[1.2rem]">
          <div className="flex items-center">
            <div className="flex items-center space-x-[1rem]">
              <div className="flex items-center space-x-3 bg-white/15 px-4 py-2 cursor-pointer rounded-full text-sm">
                <FaRegHeart />
                <span>170</span>
              </div>

              <div
                className="flex items-center space-x-3 bg-white/15 px-4 py-2 rounded-full text-sm cursor-pointer"
                onClick={() => {
                  setIsComment(true);
                  scrollToComment();
                }}
              >
                <FaRegComment />
                <span>Reply</span>
              </div>

              <div className="flex items-center space-x-3 px-4 py-2 rounded-full cursor-pointer  bg-white/15 text-sm">
                <MdOutlineShare />
                <span>Share</span>
              </div>
            </div>
          </div>
          {/* save post button */}
          <span className="bg-[#FFA94D] py-2 px-3 flex items-center justify-center rounded-md text-sm ">
            {post.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
