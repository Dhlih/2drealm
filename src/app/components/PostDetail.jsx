"use client";

import { IoEyeOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa6";
import { GoShareAndroid } from "react-icons/go";
import axios from "axios";

import { useState, useEffect } from "react";

const PostDetail = ({ post, scrollToComment, setIsComment }) => {
  const [isSave, setIsSave] = useState(false);

  useEffect(() => {
    const updateView = async () => {
      await axios.patch(`/api/posts/${post._id}/view`);
    };
    updateView();
  }, []);

  return (
    <div className="w-full ">
      <h3 className="text-2xl font-semibold mb-1 ">{post.title}</h3>

      <div className="bg-secondary py-[1.2rem] px-[1.5rem] rounded-xl mb-[2rem] mt-[1.5rem]">
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
            <span className="bg-[#FFA94D] py-1 px-3 flex items-center justify-center rounded-md">
              {post.category}
            </span>
          </div>
        </div>

        {/* text group */}
        <div className="mt-4">
          <p className="text-white/75 text-lg ">{post.description}</p>
        </div>

        {/* metrics */}
        <div className="flex justify-between mt-[1rem]">
          <div className="flex items-center">
            <div className="flex items-center space-x-[1rem]">
              <div className="flex items-center space-x-3">
                <FaRegHeart className="cursor-pointer" />
                <span>170</span>
              </div>
              <button
                className="cursor-pointer"
                onClick={() => {
                  setIsComment(true);
                  scrollToComment();
                }}
              >
                Reply
              </button>
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

export default PostDetail;
