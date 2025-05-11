"use client";
import React, { useRef, useState } from "react";

const PostsWrite = () => {
  return (
    <div className="w-full py-[3rem]">
      {/* content */}
      <div className="mt-[6rem] max-w-[600px] mx-auto ">
        <form action="" className="space-y-[1rem]">
          <div className="flex flex-col space-y-[0.5rem]">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="bg-secondary py-2 px-4 rounded-md"
            />
          </div>

          {/* Dropdown Category */}
          <div className="flex flex-col space-y-[0.5rem]">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              className="bg-secondary py-2 px-4 rounded-md"
              defaultValue=""
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="anime">Anime</option>
              <option value="manga">Manhwa</option>
              <option value="review">Manga</option>
              <option value="fanart">Game</option>
              <option value="fanart">Music</option>
              <option value="fanart">Novel</option>
            </select>
          </div>

          <div className="flex flex-col space-y-[0.5rem]">
            <label htmlFor="description">Description</label>
            <div className="bg-secondary"></div>
          </div>

          <button className="bg-accent rounded-md py-2 text-center text-black w-full mt-[1rem]">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostsWrite;
