"use client";
import React, { useRef, useState } from "react";

const PostsWrite = () => {
  return (
    <div className="w-full py-[3rem]">
      {/* content */}
      <div className="mt-[6rem] max-w-[600px] mx-auto ">
        <h1 className="text-3xl font-semibold mb-[1.5rem]">Create Post</h1>

        <form action="" className="space-y-[1.5rem]">
          <div className="flex flex-col space-y-[0.5rem]">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="bg-secondary py-2 px-4 rounded-md"
            />
          </div>

          {/* Dropdown Category */}
          <div className="flex flex-col space-y-[0.5rem]">
            <select
              name="category"
              className="bg-secondary py-2 px-4 rounded-md text-white/50"
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
            <textarea
              name="description"
              rows={4}
              placeholder="Description"
              className="bg-secondary rounded-md resize-none py-2 px-4"
            ></textarea>
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
