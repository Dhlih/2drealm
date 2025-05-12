"use client";

import { FaRegHeart } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineShare } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

import { useState, useEffect } from "react";
import { updateView } from "../action/post";
import { updateLike } from "../action/post";

const PostDetail = ({ post, scrollToComment, setIsComment }) => {
  const [isSave, setIsSave] = useState(false);
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    const update = async () => {
      await updateView(post._id);
    };
    update();
  }, []);

  const handleUpdateView = () => {
    const currentIsLike = !isLike;
    setIsLike(!isLike);
    console.log("like");

    // if (currentIsLike) {
    //   updateLike(post._id);
    // }
  };

  return (
    <div className="w-full ">
      <h3 className="text-2xl font-semibold mb-1 ">{post.title}</h3>

      <div className="bg-secondary py-[1.5rem] px-[1.5rem] rounded-xl mb-[2rem] mt-[1.5rem]">
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
          <p className="text-white/75 text-lg ">{post.description}</p>
        </div>

        {/* metrics */}
        <div className="flex justify-between mt-[1.2rem]">
          <div className="flex items-center">
            <div className="flex items-center space-x-[1rem]">
              <div
                className={`flex items-center space-x-3 cursor-pointer bg-white/10 px-4 py-2 rounded-full text-sm ${
                  isLike ? "bg-white/18" : "bg-white/10"
                } hover:bg-white/18`}
                onClick={handleUpdateView}
              >
                {/* like */}
                {isLike ? <FaHeart className="text-white" /> : <FaRegHeart />}
                <span>170</span>
              </div>
              {/* comment */}
              <div
                className="flex items-center space-x-3 px-4 py-2 rounded-full text-sm cursor-pointer bg-white/10 hover:bg-white/18"
                onClick={() => {
                  setIsComment(true);
                  scrollToComment();
                }}
              >
                <FaRegComment />
                <span>Reply</span>
              </div>
              {/* share */}
              <div className="flex items-center space-x-3 px-4 py-2 rounded-full cursor-pointer  bg-white/10 text-sm hover:bg-white/18">
                <MdOutlineShare />
                <span>Share</span>
              </div>
            </div>
          </div>
          {/* save post button */}
          <span className="bg-[#FFA94D] py-2 px-3 flex items-center justify-center rounded-md text-sm">
            {post.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
